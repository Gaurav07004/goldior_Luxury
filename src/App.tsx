import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home.tsx";
import SingleProduct from "./pages/SingleProduct.tsx";
import About from "./pages/About.tsx";
import Services from "./pages/Services.tsx";
import Shop from "./pages/Shop.tsx";
import UserAuthentication from "./pages/UserAuthentication.tsx";
import Login from "./ui/Authentication/Login.tsx";
import FinalDetails from "./pages/FinalDetails.tsx";
import PersonalDetails from "./pages/PersonalDetails.tsx";
import CartPage from "./pages/CartPage.tsx";
import Blog from "./pages/Blog.tsx";
import Blog1 from "./ui/blog/Blog1.tsx";
import Blog2 from "./ui/blog/Blog2.tsx";
import Blog3 from "./ui/blog/Blog3.tsx";
import Blog4 from "./ui/blog/Blog4.tsx";
import Privacy from "./ui/security/PrivacyPolicy.tsx";
import RefundPolicy from "./ui/security/RefundPolicy.tsx";
import TermsAndConditions from "./ui/security/terms.tsx";
import BuyerProtectionPage from "./ui/security/BuyerProtectionPage.tsx";
import DeliveryPage from "./ui/security/DeliveryPage.tsx";
import PaymentPage from "./ui/security/PaymentPage.tsx";
import AiAssistant from "./ui/components/chatbot.tsx"; // Import AI Assistant

export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route index element={<Home />} />
          <Route path="/discover" element={<About />} />
          <Route path="/Our-Luxury-Collection" element={<Shop />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/Contact-Us" element={<Blog />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/final-details" element={<FinalDetails />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/register" element={<UserAuthentication />} />
          <Route path="/login" element={<Login />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/blog/make-your-scent-last-all-day"
            element={<Blog1 />}
          />
          <Route
            path="/blog/choosing-the-perfect-fragrance-for-every-season"
            element={<Blog2 />}
          />
          <Route path="/blog/find-your-signature-scent" element={<Blog3 />} />
          <Route
            path="/blog/discover-the-different-types-of-perfumes"
            element={<Blog4 />}
          />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/Payment-Page" element={<PaymentPage />} />
          <Route
            path="/Buyer-Protection-Page"
            element={<BuyerProtectionPage />}
          />
          <Route path="/Delivery-Page" element={<DeliveryPage />} />
        </Routes>
      </BrowserRouter>

      {/* AI Assistant Component */}
      <AiAssistant />
    </QueryClientProvider>
  );
}
