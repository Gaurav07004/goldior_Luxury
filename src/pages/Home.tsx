import { useEffect, useState } from "react";
import Navbar from "../ui/general/Navbar";
import HomeGrid from "../ui/general/Collection";
import Hero from "../ui/Home/Hero";
import SubscriptionBanner from "../ui/Home/SubscriptionBanner";
import Welcome from "../ui/Home/Welcome";
import About from "../ui/Home/AboutUs";
import Footer from "../ui/general/Footer";
import useGetMostOrderedProducts from "../data/products/useGetMostOrderedProducts";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../Features/user/userSlice";

import landingPageImage from "../assets/landing-page-perfume.png";
import AboutImage from "../assets/welcome-page-image.png";

function Home() {
  const { products } = useGetMostOrderedProducts();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user); // Select user from Redux store

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchUser = async () => {
      try {
        const email = localStorage.getItem("userEmail"); // Get email from storage
        if (!email) {
          console.error("No email found in localStorage");
          return;
        }

        const res = await fetch(
          `http://localhost:5100/api/auth/get-user-by-email/${email}`,
          {
            method: "GET",
          }
        );

        if (!res.ok) throw new Error("Failed to fetch user");

        const data = await res.json();

        // Log the fetched data before Redux dispatch
        console.log("Fetched user data:", data); // Log the full response to check the structure

        if (data && data.user) {
          // Log user data before Redux
          console.log("User data before Redux:", data.user);

          // Dispatch action to update Redux state
          dispatch(setUserData({ user: data.user }));

          // Redux state change will happen asynchronously, so we cannot directly log the updated state here
        } else {
          console.error("User data not found in the response");
        }
      } catch (err) {
        console.error("User fetch error:", err.message);
      }
    };

    fetchUser();
  }, [dispatch]);

  // Log user data after Redux state update by using a separate effect
  useEffect(() => {
    if (user && user.username) {
      console.log("User data after Redux:", user);
    }
  }, [user]); // This effect will run whenever the Redux state (user) changes

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
        navigateToAbout="/Blogs"
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
      <SubscriptionBanner />
      <Footer />
    </>
  );
}

export default Home;
