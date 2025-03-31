import { useEffect } from "react";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";

const BuyerProtectionPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-transparent font-inter mt-24 text-justify">
        <h1 className="text-3xl font-semibold text-center mb-6 text-slate-700">
          Buyer Protection
        </h1>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-700">
            1. 100% Authentic Products
          </h2>
          <p className="text-base text-slate-600">
            We guarantee that all our luxury perfumes are 100% authentic, and
            sourced directly. When you shop with us, you can trust you’re
            getting genuine, high-quality fragrances at affordable prices.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            2. Secure Payment Processing
          </h2>
          <p className="text-base text-slate-600">
            Our website utilizes the latest encryption technology to protect
            your personal and payment information. Your transactions are
            processed securely through trusted payment gateways for added peace
            of mind.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            3. Easy Returns & Exchanges
          </h2>
          <p className="text-base text-slate-600">
            Our hassle-free return policy allows you to return or exchange your
            luxury perfume within 5 days of purchase. If you're not completely
            satisfied, we’ll make the process easy and straightforward.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            4. Privacy Protection
          </h2>
          <p className="text-base text-slate-600">
            We respect your privacy and are committed to keeping your personal
            information confidential. We never share or sell your data to third
            parties. Your details are solely used to enhance your shopping
            experience with us.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            5. Customer Support
          </h2>
          <p className="text-base text-slate-600">
            Our dedicated customer service team is always ready to assist you.
            Whether you have questions about your order, shipping, or any other
            concerns, we're here to ensure you have a smooth experience.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            6. Contact Us
          </h2>
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

export default BuyerProtectionPage;
