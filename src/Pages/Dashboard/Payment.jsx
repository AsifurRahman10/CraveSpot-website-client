import { loadStripe } from "@stripe/stripe-js";
import { CheckoutForm } from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = await loadStripe(import.meta.env.VITE_Payment_key);

export const Payment = () => {
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
