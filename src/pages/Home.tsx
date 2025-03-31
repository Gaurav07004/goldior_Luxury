import { useEffect } from "react";
import Navbar from "../ui/general/Navbar";
import HomeGrid from "../ui/general/Collection";
import Hero from "../ui/Home/Hero";
// import Review from "../ui/Home/Review";
import SubscriptionBanner from "../ui/Home/SubscriptionBanner";
import Welcome from "../ui/Home/Welcome";
import About from "../ui/Home/AboutUs";
import landingPageImage from "../assets/landing-page-perfume.png";
import AboutImage from "../assets/welcome-page-image.png";
// import welcomeBg from "../assets/welcome-bg.png";
// import SaleBanner from "../ui/Home/SaleBanner";
// import salePageBG from "../assets/sale_page_bg.jpg";
import Footer from "../ui/general/Footer";
import useGetMostOrderedProducts from "../data/products/useGetMostOrderedProducts";

function Home() {
  const { products } = useGetMostOrderedProducts();
  // console.log("products: ", products);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);
  return (
    <>
      <Navbar />
      <Hero
        heading={"Luxury Perfumes Tailored Just For You!"}
        subtext={
          "At Goldior Luxury, we craft exquisite fragrances that celebrate your success. Our exclusive collection is designed to empower and elevate your spirit, leaving a lasting impression wherever you go. Embrace the essence of luxury with a scent that’s uniquely yours."
        }
        shopButton={"Shop Now"}
        viewDetail={"View Details"}
        expertTitle={"Our Experts"}
        expertTitletext={
          "Harness the power of natural ingredients to stand out in your personality."
        }
        explore={"Explore More"}
        imageUrl={landingPageImage}
        navigateToshop="/Our-Luxury-Collection"
        navigateToView="/View"
        navigateToAbout="/Discover"
      />
      <Welcome />
      <About
        heading={"About Us"}
        subHead={"Our Legacy Of Excellence"}
        subtext={
          "Goldior is a luxury perfume brand that provides an exclusive collection of premium lifestyle products for everyone. Our formulations are a mix of luxurious & made from the best oils from around the world in every product. We provide premium quality and sophistication at affordable prices."
        }
        shopButton={"Discover More"}
        imageUrl={AboutImage}
        navigateToshop="/Discover"
      />
      <HomeGrid products={products} heading="Best Seller" />
      {/* <Review /> */}
      <SubscriptionBanner />
      {/* <SaleBanner
        heading="Exclusive Launch Offer For First 100 Customers"
        subtext={
          "Discover an exquisite collection of premium perfumes at unbelievable prices during our exclusive Perfume Sale!"
        }
        imageUrl={salePageBG}
      />
      <Footer /> */}
      <Footer />
    </>
  );
}

export default Home;
