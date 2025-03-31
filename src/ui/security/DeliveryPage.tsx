import { useEffect } from "react";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";

const DeliveryPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-transparent font-inter mt-24 text-justify">
        <h1 className="text-3xl font-semibold text-center mb-6 text-slate-700">
          Delivery Options
        </h1>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-700">
            1. Free Standard Shipping
          </h2>
          <p className="text-base text-slate-600">
            Take advantage of our free standard shipping on all orders within
            Mumbai, India. Luxury perfumes at budget prices should come with no
            hidden shipping fees.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            2. Packaging
          </h2>
          <p className="text-base text-slate-600">
            Your order will be carefully packed to ensure it arrives in perfect
            condition. We use secure and protective packaging to safeguard your
            perfume during transit.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            3. Discreet Delivery
          </h2>
          <p className="text-base text-slate-600">
            We value your privacy. Your package will be delivered discreetly
            without any branding, ensuring a luxurious, confidential experience.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            4. Delivery to Multiple Addresses
          </h2>
          <p className="text-base text-slate-600">
            You can choose to ship your order to multiple addresses, making it
            easier to gift luxury perfumes to friends, family, or colleagues.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            5. Estimated Delivery Time
          </h2>
          <p className="text-base text-slate-600">
            Delivery times vary depending on your location and selected shipping
            method. Estimated delivery times are provided during checkout for
            transparency.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            6. Customer Support
          </h2>
          <p className="text-base text-slate-600">
            Our dedicated customer support team is available to assist you with
            any delivery inquiries. Feel free to contact us for any questions
            regarding your order or shipping options.
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

export default DeliveryPage;
