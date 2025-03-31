import { useEffect } from "react";
import Navbar from "../general/Navbar";
import Footer from "../general/Footer";
import { NavLink } from "react-router-dom";

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto p-6 bg-transparent font-inter mt-24 text-justify">
        <h1 className="text-3xl font-semibold text-center mb-6 text-slate-700">
          Terms and Conditions
        </h1>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-slate-700">
            1. Introduction
          </h2>
          <p className="text-base text-slate-600">
            Welcome to Goldior Luxury. These Terms and Conditions govern your
            use of our website, services, and products, located at{" "}
            <NavLink
              to="https://www.goldiorluxury.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-700"
            >
              www.goldiorluxury.com
            </NavLink>
            . By accessing or using our website, you agree to comply with and be
            bound by these Terms and Conditions. If you do not agree with these
            terms, please do not use our website.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            2. Eligibility
          </h2>
          <p className="text-base text-slate-600">
            You must be at least 16 years old to use our website and make
            purchases. By using our website, you represent and warrant that you
            are of legal age and have the authority to enter into a binding
            contract.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            3. Product Information
          </h2>
          <p className="text-base text-slate-600">
            We strive to ensure that all product descriptions, images, and
            prices on our website are accurate. However, errors may occur, and
            we reserve the right to correct any inaccuracies, update
            information, or modify pricing at any time without prior notice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            4. Orders and Payments
          </h2>
          <ul className="list-disc list-inside text-base text-slate-600 pl-4 space-y-2">
            <li>
              <strong className="text-slate-700">Order Acceptance:</strong> All
              orders placed through our website are subject to acceptance. We
              reserve the right to refuse or cancel orders at our discretion.
            </li>
            <li>
              <strong className="text-slate-700">Payment:</strong> We accept
              COD, debit and credit card, and UPI payments. Payment must be
              received before we process your order.
            </li>
            <li>
              <strong className="text-slate-700">Pricing:</strong> All prices
              listed on the website are in INR and include applicable taxes
              unless stated otherwise. Shipping charges are not included in the
              product price and will be calculated at checkout.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            5. Shipping and Delivery
          </h2>
          <ul className="list-disc list-inside text-base text-slate-600 pl-4 space-y-2">
            <li>
              <strong className="text-slate-700">Shipping Locations:</strong> We
              offer shipping all over India.
            </li>
            <li>
              <strong className="text-slate-700">Delivery Time:</strong>{" "}
              Estimated delivery times will be provided at checkout. Please note
              that delivery times may vary due to factors beyond our control,
              such as customs delays or courier issues.
            </li>
            <li>
              <strong className="text-slate-700">Shipping Fees:</strong>{" "}
              Shipping fees are calculated based on your location and the weight
              of the order.
            </li>
            <li>
              <strong className="text-slate-700">Lost/Damaged Items:</strong> We
              are not responsible for lost or damaged items once they are handed
              over to the courier. If your package is lost or damaged, please
              contact the courier service directly.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            6. Returns and Refunds
          </h2>
          <ul className="list-disc list-inside text-base text-slate-600 pl-4 space-y-2">
            <li>
              <strong className="text-slate-700">Eligibility:</strong> You may
              return unopened, unused products within 7 days of receiving your
              order for a full refund or exchange, excluding shipping costs.
            </li>
            <li>
              <strong className="text-slate-700">Process:</strong> To initiate a
              return, please contact our customer service at{" "}
              <a
                href="mailto:info@goldiorluxury.com"
                className="text-blue-500 hover:underline"
              >
                info@goldiorluxury.com
              </a>
              . Products must be returned in their original packaging, and you
              are responsible for return shipping costs.
            </li>
            <li>
              <strong className="text-slate-700">Non-Returnable Items:</strong>{" "}
              Certain products, such as custom or personalized orders, cannot be
              returned unless there is a defect.
            </li>
            <li>
              <strong className="text-slate-700">Refunds:</strong> Refunds will
              be issued to the original payment method once we receive and
              inspect the returned products.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            7. Intellectual Property
          </h2>
          <p className="text-base text-slate-600">
            All content on this website, including but not limited to text,
            images, graphics, logos, and designs, is the property of Goldior
            Luxury or its licensors and is protected by copyright and trademark
            laws. You may not reproduce, distribute, or use any content without
            our express written permission.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            8. User Accounts
          </h2>
          <p className="text-base text-slate-600">
            To access certain features of our website, you may be required to
            create an account. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            9. Privacy Policy
          </h2>
          <p className="text-base text-slate-600">
            Your use of our website is also governed by our Privacy Policy.
            Please review the Privacy Policy to understand our practices
            regarding collecting and using your personal information.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            10. Limitation of Liability
          </h2>
          <p className="text-base text-slate-600">
            We are not liable for any direct, indirect, incidental, or
            consequential damages arising from your use of our website,
            products, or services. This includes, but is not limited to, damages
            for loss of profits, goodwill, data, or other intangible losses.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            11. Dispute Resolution
          </h2>
          <p className="text-base text-slate-600">
            Any disputes arising from or in connection with these Terms and
            Conditions shall be resolved through negotiation.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            12. Governing Law
          </h2>
          <p className="text-base text-slate-600">
            These Terms and Conditions are governed by and construed per the
            laws of India, without regard to its conflict of law principles.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            13. Changes to Terms
          </h2>
          <p className="text-base text-slate-600">
            We reserve the right to update or modify these Terms and Conditions
            without prior notice. Any changes will be posted on this page, and
            your continued use of the website constitutes acceptance of the
            revised terms.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 mt-6 text-slate-700">
            14. Contact Information
          </h2>
          <p className="text-base text-slate-600">
            For any questions or concerns regarding these Terms and Conditions,
            please contact us at:
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
            <li>
              <strong>WhatsApp:</strong> India: +91 8818-8818-25 | U.A.E: +971
              56-786-1067
            </li>
            <li>
              <strong>Address:</strong> Mumbai, Maharashtra, India & Bur Dubai,
              U.A.E
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndConditions;
