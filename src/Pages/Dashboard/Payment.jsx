import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

// const stripePromise = await loadStripe(import.meta.env.VITE_Payment_key);

export const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    const initializeStripe = async () => {
      const stripe = await loadStripe(import.meta.env.VITE_Payment_key);
      setStripePromise(stripe);
    };

    initializeStripe();
  }, []);
  return (
    <div>
      <h2 className="my-10 text-center text-4xl">Payment</h2>

      {/* add stripe */}
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};
