import React, { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../ui/general/Navbar";
import { getCart } from "../Features/cart/cartSlice";

interface FormData {
  name: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
}

const PersonalDetails: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const cartItems = useSelector(getCart); // Get cart items from Redux
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Pass form data and cart items to the Final Details page
    navigate("/final-details", { state: { userDetails: formData, cartItems } });
  };

  return (
    <>
      <Navbar />
      <div className="p-4 bg-gradient-to-r from-[#fef3e6] via-white to-[#fdebd0]">
        <div className="flex justify-center items-center mb-4 pt-[6rem] uppercase">
          <span className="text-gray-700 font-serif text-3xl font-bold leading-tight">
            Personal Details
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow border border-gray-300 space-y-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="off"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="addressLine1"
              className="block text-sm font-semibold text-gray-700"
            >
              Address Line 1
            </label>
            <input
              type="text"
              id="addressLine1"
              name="addressLine1"
              placeholder="Street address, P.O. box, company name, etc."
              value={formData.addressLine1}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="addressLine2"
              className="block text-sm font-semibold text-gray-700"
            >
              Address Line 2 (Optional)
            </label>
            <input
              type="text"
              id="addressLine2"
              name="addressLine2"
              placeholder="Apartment, suite, unit, building, floor, etc."
              value={formData.addressLine2}
              onChange={handleChange}
              className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City name"
                value={formData.city}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="state"
                className="block text-sm font-semibold text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="State name"
                value={formData.state}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <label
                htmlFor="country"
                className="block text-sm font-semibold text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Country name"
                value={formData.country}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="pinCode"
                className="block text-sm font-semibold text-gray-700"
              >
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                placeholder="Postal code"
                value={formData.pinCode}
                onChange={handleChange}
                className="mt-2 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="w-48 uppercase font-medium bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white py-3 px-6 rounded-md shadow-md transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalDetails;
