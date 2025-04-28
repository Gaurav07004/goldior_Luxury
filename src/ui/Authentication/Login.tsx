import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { sendEmailForOtp } from "../../data/auth/otpverification";
import { useVerifyOtp } from "../../data/auth/UseVerifyOtp";
import { IoMailOutline } from "react-icons/io5";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const { verifyOtp } = useVerifyOtp();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && step === 2) setStep(1);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [step]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmitEmail = () => {
    if (!email) return;
    sendEmailForOtp(email);
    setStep(2);
  };

  const handleVerifyOtp = () => {
    if (!email || otp.some((value) => value === "")) return;
    verifyOtp(email, otp.join(""));
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      } else if (!value && index > 0) {
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-l from-[#f8e9d7] to-[#fbe3bf] p-4">
      <div className="bg-white border border-gray-300 p-8 rounded-lg w-full max-w-md">
        {step === 1 && (
          <>
            <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
              Welcome Back!
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Sign in to shop, track orders, and manage your account.
            </p>
            <div className="relative">
              <IoMailOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full py-3 pl-12 pr-12 border border-gray-300 rounded-md text-gray-600 placeholder-gray-400 text-sm focus:outline-none "
                placeholder="Email Address"
              />
            </div>
            <button
              onClick={handleSubmitEmail}
              className="w-full mt-4 p-3 bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] text-white rounded-md transition duration-300"
            >
              Send OTP
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <NavLink to="/register" className="text-yellow-600 font-medium">
                Register
              </NavLink>
            </p>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-lg font-bold text-center text-gray-700">
              Enter Verification Code
            </h2>
            <p className="text-center text-gray-600 text-sm mt-2">
              We've sent a code to{" "}
              <span className="font-medium text-gray-800">{email}</span>
            </p>
            <p className="text-sm text-gray-600 text-start mt-6">
              Enter One-Time Password (OTP)
            </p>
            <div className="flex justify-between mt-2">
              {otp.map((value, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  id={`otp-${index}`}
                  autoComplete="off"
                  className="w-12 h-12 border border-gray-300 text-center text-xl rounded-md focus:outline-none "
                />
              ))}
            </div>
            <button
              onClick={handleVerifyOtp}
              className="w-full p-3 bg-[var(--theme-brown)] hover:bg-[var(--buttonHover)] mt-4 text-white rounded-md transition duration-300 "
            >
              Verify OTP
            </button>
            <p className="text-center text-sm text-gray-600 mt-4">
              Didn’t receive an OTP?{" "}
              <button
                onClick={handleSubmitEmail}
                className="text-yellow-600 font-medium"
              >
                Resend
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
