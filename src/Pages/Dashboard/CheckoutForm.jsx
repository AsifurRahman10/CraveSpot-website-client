import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useAxiosSecure } from "../../Hooks/useAxiosSecure";
import { useCart } from "../../Hooks/useCart";
import { useAuth } from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }
    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "none",
            email: user.email,
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id);
        setTransactionId(paymentIntent.id);
        const paymentData = {
          email: user.email,
          price: totalPrice,
          date: new Date(), //use moment js
          cartIds: cart.map((item) => item._id),
          menuId: cart.map((item) => item.menuID),
          status: "pending",
          transactionId: paymentIntent.id,
        };
        console.log(paymentData);
        const res = await axiosSecure.post("/paymentHistory", paymentData);
        refetch();
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "You payment has been successful",
            icon: "success",
          });
          navigate("/dashboard/cart");
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="w-1/2 mx-auto">
        <div className="p-4 border rounded-lg bg-gray-50 focus-within:ring-2 focus-within:ring-blue-500">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "#333", // Change text color
                  fontFamily: '"Roboto", sans-serif', // Use a custom font
                  fontWeight: "500", // Adjust font weight
                  "::placeholder": {
                    color: "#888", // Change placeholder text color
                  },
                  iconColor: "#ffc107", // Change card brand icon color
                },
                invalid: {
                  color: "#e63946", // Change color for invalid input
                  iconColor: "#e63946", // Change icon color for invalid input
                },
                complete: {
                  color: "#4caf50", // Change color for completed input
                  iconColor: "#4caf50", // Change icon color for completed input
                },
              },
            }}
          />
        </div>
        {error && <p className="text-red-600 my-4">{error}</p>}
        {transactionId && (
          <p className="text-green-800 my-4">
            Transaction id : {transactionId}
          </p>
        )}
        <button
          type="submit"
          className="btn block mx-auto bg-[#570DF8] w-1/2 text-white"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
    </div>
  );
};
