import { NavLink } from "react-router-dom";
import logo from "../../assets/goldior-logo.png";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="px-8 sm:px-8 md:px-16 lg:px-32 pt-16 pb-4 bg-gradient-to-r from-[#fef3e6] via-white to-[#fdebd0] border-t-2">
      <div>
        <div className="w-[7rem] h-auto sm:w-[8rem] md:w-[9rem] lg:w-[10rem] xl:w-[8rem]">
          <img
            src={logo}
            alt="Glodior Logo"
            className="h-full max-h-[70%] sm:max-h-[auto] w-auto object-contain rounded-md"
          />
        </div>
        <p className="text-lg xs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-xl text-[var(--theme-brown)] my-6">
          Where luxury meets the art of fragrance
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 w-full">
          <section className="flex flex-col items-center w-full">
            <div className="font-medium text-xl mb-3 text-slate-800">
              Office Address
            </div>
            <div className="text-sm sm:text-base text-gray-500 text-center">
              202, Crystal Tower, Gundavali Road, Near Apollo Diagnostic,
              Andheri East, Maharashtra, India.
            </div>
            <ul className="flex flex-wrap justify-center gap-4 text-sm text-slate-800 mt-6">
              <li>
                <NavLink to="/terms-conditions" className="hover:text-gray-700">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="/privacy-policy" className="hover:text-gray-700">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="flex flex-col items-center w-full">
            <div className="font-medium text-xl mb-3 text-slate-800">
              Shopping
            </div>
            <ul className="text-center">
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/Payment-Page">Payments</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/Delivery-Page">Delivery Options</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/Buyer-Protection-Page">Buyer Protection</NavLink>
              </li>
            </ul>
          </section>

          <section className="flex flex-col items-center w-full">
            <div className="font-medium text-xl mb-3 text-slate-800">
              Customer Care
            </div>
            <ul className="text-center">
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="">Help Center</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/refund-policy">Returns & Refund</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="">Survey & Feedback</NavLink>
              </li>
            </ul>
          </section>

          <section className="flex flex-col items-center w-full">
            <div className="font-medium text-xl mb-3 text-slate-800">Pages</div>
            <ul className="text-center">
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/Discover">Discover</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/Our-Luxury-Collection">Collection</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="">Contact Us</NavLink>
              </li>
              <li className="cursor-pointer text-sm sm:text-base text-gray-500 hover:text-gray-800 mb-2">
                <NavLink to="/blogs">Blog</NavLink>
              </li>
            </ul>
          </section>

          <section className="flex flex-col items-center w-full">
            <div className="font-medium text-xl mb-3 text-slate-800">
              Social Media
            </div>
            <div className="flex gap-2">
              <NavLink
                to=""
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="Facebook"
              >
                <TiSocialFacebook className="text-xl sm:text-2xl" />
              </NavLink>
              <NavLink
                to=""
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="Instagram"
              >
                <IoLogoInstagram className="text-xl sm:text-2xl" />
              </NavLink>
              <NavLink
                to=""
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="LinkedIn"
              >
                <TiSocialLinkedin className="text-xl sm:text-2xl" />
              </NavLink>
              <NavLink
                to="https://wa.link/t09and"
                className="bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white p-2 duration-300 rounded-md"
                aria-label="Whatsapp"
              >
                <MdOutlineWhatsapp className="text-xl sm:text-2xl" />
              </NavLink>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-8 text-center">
        <hr className="border-gray-400 mb-4" />
        <p className="text-sm sm:text-base text-gray-800 mb-2 flex justify-center items-start gap-2">
          <FaRegCopyright className="xs:text-base xl:mt-[0.32rem] xl:text-sm" />{" "}
          Copyright 2024 Glodior Luxury Pvt. Ltd. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
