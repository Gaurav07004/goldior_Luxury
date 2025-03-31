import { useEffect } from "react";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";

const PaymentPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-transparent font-inter mt-24 text-justify">
        <h1 className="text-3xl font-semibold text-center mb-6 text-slate-700">
          Payments
        </h1>

        <p className="text-base text-slate-600 mb-6">
          At Goldior Luxury Perfumes, we strive to make your shopping experience
          as seamless and secure as possible. Our payment options are designed
          to give you flexibility while ensuring your privacy and safety. Here’s
          everything you need to know about making payments on our website:
        </p>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-700">
            1. Secure Payment Gateway
          </h2>
          <p className="text-base text-slate-600">
            We use the latest encryption technology to ensure your payment
            information is fully protected. Shop with confidence knowing your
            details are safe with us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            2. Multiple Payment Methods
          </h2>
          <p className="text-base text-slate-600">
            Choose from a variety of payment options, including credit/debit
            cards, UPI payments, and more. We aim to make your checkout process
            smooth and convenient.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            3. Easy & Fast Checkout
          </h2>
          <p className="text-base text-slate-600">
            With our user-friendly checkout system, you can complete your
            purchase quickly without any hassle. We prioritize a fast, efficient
            transaction process for all our customers.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            4. No Hidden Fees
          </h2>
          <p className="text-base text-slate-600">
            The price you see is the price you pay. We are transparent about all
            costs, so you won’t encounter unexpected charges during checkout.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            5. Payment Confirmation
          </h2>
          <p className="text-base text-slate-600">
            Once your payment is processed, you’ll receive an instant order
            confirmation along with a receipt for your records.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            6. Tax & Shipping Information
          </h2>
          <p className="text-base text-slate-600">
            Sales tax and shipping charges will be calculated at checkout based
            on your location, ensuring full transparency.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            7. Customer Support
          </h2>
          <p className="text-base text-slate-600">
            If you have any issues with your payment or need assistance, our
            customer service team is here to help.
          </p>
          <ul className="list-none text-base text-slate-600 space-y-2 mt-2">
            <li>
              <strong>Email: </strong>
              <a
                href="mailto:support@goldiorluxury.com"
                className="text-blue-500 hover:underline"
              >
                support@goldiorluxury.com
              </a>
            </li>
            <li>
              <strong>Contact Us:</strong> India: +91 8818-8818-25 | U.A.E: +971
              56-786-1067
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
