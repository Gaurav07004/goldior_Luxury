/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/goldior-logo.png";
import { PiHeart, PiUser, PiShoppingCartSimple } from "react-icons/pi";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import WishlistCard from "./WishlistCard";
import { RxCross1 } from "react-icons/rx";

import wishimg from "../../assets/8.jpg";
import { getWishlist } from "../../data/wishlist/getWishlist";
import ProfileCard from "../components/profile";

// Type definition for Wishlist item
interface WishlistItem {
  _id: string;
  name: string;
  imageUrl: string;
  discountPercentage?: number;
  quantity: string;
  price: number;
}

export default function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWishlistOpen, setWishlistOpen] = useState(false);
  const [favourites, setFavourites] = useState<WishlistItem[]>([]);
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
  const profileCardRef = useRef<HTMLDivElement>(null);
  const wishlistRef = useRef<HTMLDivElement>(null);
  const userEmail = localStorage.getItem("user_email_goldior_luxury");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (
        profileCardRef.current &&
        !profileCardRef.current.contains(event.target)
      ) {
        setIsProfileCardOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const items = await getWishlist();
      setFavourites(items);
    };
    fetchData();
  }, [isWishlistOpen]);

  const handleLogout = () => {
    localStorage.removeItem("user_email_goldior_luxury");
    setIsProfileCardOpen(false);
    navigate("/");
  };

  const toggleProfileCard = () => {
    if (!userEmail) {
      navigate("/login");
    } else {
      setIsProfileCardOpen(!isProfileCardOpen);
    }
  };

  const NavItem: React.FC<{ to?: string; children: React.ReactNode }> = ({
    children,
    to,
  }) => {
    if (to) {
      // If 'to' exists, render NavLink
      return (
        <li className="mx-1 sm:mx-2 md:mx-3">
          <NavLink
            to={to}
            className={({ isActive }) =>
              `cursor-pointer text-center text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.05rem] text-slate-700 hover:text-[var(--theme-brown)] max-w-fit px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg ease-in-out duration-300 ${
                isActive ? "text-yellow-500 font-medium" : ""
              }`
            }
          >
            {children}
          </NavLink>
        </li>
      );
    }

    // If 'to' doesn't exist, render a span or other element (no link)
    return (
      <li className="mx-1 sm:mx-2 md:mx-3">
        <span className="cursor-pointer text-center text-[0.9rem] sm:text-[1rem] md:text-[1rem] lg:text-[1.05rem] xl:text-[1.05rem] text-slate-700 hover:text-[var(--theme-brown)] max-w-fit px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg ease-in-out duration-300">
          {children}
        </span>
      </li>
    );
  };

  return (
    <nav
      className={`flex justify-between items-center w-full h-[4rem] xs:h-[5rem] sm:h-[6rem] md:h-[6rem] fixed top-0 z-20 px-4 sm:px-8 sm:py-2 xs:py-2 md:px-8 lg:px-[3rem] xl:px-32 ${
        isScrolled ? "bg-[#fffef9] shadow" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="lg:w-[7rem] h-auto xs:w-[30%] sm:w-[20%] md:w-[12%]">
        <img
          src={logo}
          alt="Goldior Logo"
          className="h-full max-h-[70%] sm:max-h-[auto] w-auto object-contain rounded-md"
        />
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-between items-center font-medium lg:w-[36rem] md:w-[26rem] xl:w-fit">
          {[
            "Home",
            "Discover",
            "Our Luxury Collection",
            // "New Launch",
            "Blogs",
            // "Contact Us",
          ].map((menu) =>
            menu === "Home" ? (
              <NavItem key={menu} to="/">
                {menu}
              </NavItem>
            ) : (
              <NavItem
                key={menu}
                to={`/${menu.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {menu}
              </NavItem>
            )
          )}
        </ul>
      </div>
      <div className="hidden md:block">
        <ul className="flex justify-between items-center font-medium lg:w-[36rem] md:w-[26rem] xl:w-[10rem]">
          <NavItem>
            <PiUser
              className="ease-in-out duration-200 text-[1.5rem] cursor-pointer"
              onClick={toggleProfileCard}
            />
            {isProfileCardOpen && userEmail && (
              <div
                style={{
                  position: "absolute",
                  top: "3rem",
                  transform: "translateX(-50%)",
                }}
              >
                <ProfileCard
                  name="Hey:)"
                  email={userEmail}
                  imageUrl={""}
                  onLogout={handleLogout}
                />
              </div>
            )}
          </NavItem>
          <NavItem>
            <PiHeart
              className="ease-in-out duration-200 lg:text-[1.5rem] md:text-[1.2rem]"
              onClick={() => setWishlistOpen(true)}
            />
          </NavItem>
          <NavItem to="/cart">
            <div className="relative">
              <PiShoppingCartSimple className="ease-in-out duration-200 lg:text-[1.5rem] md:text-[1.2rem]" />
              <span className="absolute top-[0rem] lg:left-[0.95rem] xl:left-[1rem] md:left-[0.75rem] w-[0.7rem] h-[0.75rem] bg-[#eca95c] rounded-full border-2 border-white"></span>
            </div>
          </NavItem>
        </ul>
      </div>
      <div
        ref={wishlistRef}
        className={`fixed top-0 right-0 h-screen bg-white border-2 transform transition-transform duration-500 z-20 ease-in-out ${
          isWishlistOpen ? "translate-x-0" : "translate-x-full"
        } w-full xs:w-full sm:w-4/5 md:w-[60%] lg:w-[70%] xl:w-[30%]`}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center w-full h-[4rem] sm:h-[5rem] md:h-[6rem] fixed top-0 z-20 px-4 sm:px-8 lg:px-[3rem] xl:px-8 bg-white transition-colors duration-300`}
        >
          <h2 className="text-xl sm:text-2xl font-semibold">Wishlist</h2>
          <div
            className="bg-slate-200 w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer 
             hover:bg-slate-300 transition-all duration-300"
            onClick={() => setWishlistOpen(false)}
          >
            <RxCross1
              size={20}
              className="transition-transform duration-300 hover:rotate-180"
            />
          </div>
        </div>

        {/* Wishlist Items */}
        <div className="pt-[5rem] sm:pt-[6rem] md:pt-[7rem] px-4 sm:px-8 lg:px-[3rem] xl:px-8 overflow-y-auto h-screen">
          {favourites.length > 0 ? (
            favourites.map((item, index) => (
              <WishlistCard
                key={index}
                favorites={favourites}
                setFavourites={setFavourites}
                id={item._id}
                name={item.name}
                // @ts-expect-error Property 'imgUrl' does not exist on type 'Item'.
                imageUrl={item.imgUrl}
                // discountPercentage={item.discountPercentage}
                quantity="250ml"
                // price={item.price}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full px-4">
              {/* Empty Wishlist Image */}
              <img
                src={wishimg} // Provide a valid empty wishlist image
                alt="Empty Wishlist"
                className="w-full max-w-[200px] h-auto object-cover mix-blend-multiply"
              />

              {/* Empty Wishlist Title */}
              <p className="text-xl sm:text-2xl font-bold text-center text-slate-700">
                Your Wishlist is Empty!
              </p>

              {/* Additional Text */}
              <p className="text-sm sm:text-base text-center mt-4 text-slate-500">
                It seems you haven’t added anything to your wishlist yet. Start
                exploring and add some favorites!
              </p>

              {/* Shop Now Button */}
              <NavLink
                to="/Our-Luxury-Collection"
                className="mt-8 bg-[var(--theme-brown)] text-white text-sm sm:text-base font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:bg-[var(--buttonHover)]"
              >
                Shop Now
              </NavLink>
            </div>
          )}
        </div>
      </div>

      <div className="md:hidden flex items-center">
        <RxHamburgerMenu
          className="text-xl cursor-pointer"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-[6rem] bg-white border-2 rounded-2xl p-4 z-10 w-[90%] mx-auto">
          <ul className="flex flex-col items-center py-4">
            {[
              "Home",
              "About Us",
              "Our Luxury Collection",
              // "New Launch",
              "Blogs",
              // "Contact Us",
            ].map((menu) =>
              menu === "Home" ? (
                <NavItem key={menu} to="/">
                  {menu}
                </NavItem>
              ) : (
                <NavItem
                  key={menu}
                  to={`/${menu.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {menu}
                </NavItem>
              )
            )}

            <div className="flex justify-center items-center gap-5 mt-2">
              <NavItem>
                <PiUser
                  className="ease-in-out duration-200 text-[1.4rem]"
                  onClick={toggleProfileCard}
                />
                {isProfileCardOpen && userEmail && (
                  <div
                    style={{
                      position: "absolute",
                      top: "3rem",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <ProfileCard
                      name="Hey:)"
                      email={userEmail}
                      imageUrl={""}
                      onLogout={handleLogout}
                    />
                  </div>
                )}
              </NavItem>

              <NavItem>
                <PiHeart
                  className="ease-in-out duration-200 text-[1.4rem]"
                  onClick={() => setWishlistOpen(true)}
                />
              </NavItem>
              <NavItem to="/cart">
                <div className="relative">
                  <PiShoppingCartSimple className="ease-in-out duration-200 text-[1.4rem]" />
                  <span className="absolute top-[0.1rem] left-[1rem] w-[0.55rem] h-[0.55rem] bg-[#eca95c] rounded-full border-2 border-white"></span>
                </div>
              </NavItem>
            </div>
          </ul>
          <div
            className="absolute top-0 right-0 p-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <RxCross2 className="text-xl cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
}
