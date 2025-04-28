import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    gender: "",
    address: {
      addressLine: "",
      city: "",
      state: "",
      country: "",
      zipcode: "",
    },
    favourites: [],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const addressField = name.split(".")[1];
      setFormData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          [addressField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:5100/api/auth/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("User created successfully:", data);
        navigate("/Login");
      } else {
        setErrorMessage(data.message || "Failed to create user");
      }
    } catch (error: any) {
      setErrorMessage(error.message || "Something went wrong");
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-l from-[#fef3e6] to-[#fdebd0] h-screen">
      <form
        className="bg-white py-4 px-6 rounded-xl w-[40%]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold text-center text-gray-800">
          Create Your Account
        </h2>
        <p className="text-center text-gray-600 mb-4 text-sm">
          Join us today and start your journey.
        </p>

        {errorMessage && (
          <p className="text-sm text-red-500 text-center mb-4">
            {errorMessage}
          </p>
        )}

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            placeholder="Enter your username"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none placeholder:text-sm text-sm text-gray-700"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none placeholder:text-sm text-sm text-gray-700"
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender
          </label>
          <div className="flex space-x-4">
            {["male", "female", "other"].map((gender) => (
              <div
                key={gender}
                onClick={() => setFormData({ ...formData, gender })}
                className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition-all border 
                ${
                  formData.gender === gender
                    ? gender === "male"
                      ? "border-blue-600 text-blue-600"
                      : gender === "female"
                      ? "border-pink-600 text-pink-600"
                      : "border-purple-600 text-purple-600"
                    : "border-gray-200 text-gray-700"
                }`}
              >
                {gender.charAt(0).toUpperCase() + gender.slice(1)}
              </div>
            ))}
          </div>
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            name="address.addressLine"
            value={formData.address.addressLine}
            onChange={handleChange}
            required
            placeholder="Street address, P.O. box"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none placeholder:text-sm text-sm text-gray-700"
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="address.city"
              value={formData.address.city}
              onChange={handleChange}
              required
              placeholder="Enter your city"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none placeholder:text-sm text-sm text-gray-700"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              State
            </label>
            <input
              type="text"
              name="address.state"
              value={formData.address.state}
              onChange={handleChange}
              required
              placeholder="Enter your state"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none placeholder:text-sm text-sm text-gray-700"
            />
          </div>
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <input
              type="text"
              name="address.country"
              value={formData.address.country}
              onChange={handleChange}
              required
              placeholder="Enter your country"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none placeholder:text-sm text-sm text-gray-700"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700">
              Zipcode
            </label>
            <input
              type="text"
              name="address.zipcode"
              value={formData.address.zipcode}
              onChange={handleChange}
              required
              placeholder="Enter your ZIP code"
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none placeholder:text-sm text-sm text-gray-700"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)]"
          } text-white py-2 px-4 rounded-md focus:outline-none placeholder:text-sm transition`}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>

        <p className="text-sm text-gray-700 text-center mt-4">
          Already registered?{" "}
          <NavLink
            to="/login"
            className="font-medium text-yellow-600 hover:underline"
          >
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
