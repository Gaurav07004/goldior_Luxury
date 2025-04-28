import { verifyUserExists } from "./VerifyUserExists";
import { useNavigate } from "react-router-dom"; // Use React Router's useNavigate

export function useVerifyOtp() {
  const navigate = useNavigate(); // To programmatically navigate

  const verifyOtp = async (email: string, otp: string) => {
    try {
      // Check if user exists before verifying OTP
      const doesUserExist = await verifyUserExists(email);
      if (!doesUserExist) {
        throw new Error("User does not exist.");
      }

      const res = await fetch(
        `http://localhost:5100/api/auth/verify-otp/${email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ otp }), // Send OTP in the request body
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to verify OTP");
      }

      // Dispatch user data to Redux store
      console.log("OTP verified successfully:", data.message);
      // console.log("🧾 User from Redux:", user);

      // Optionally store the email in localStorage if required
      localStorage.setItem("userEmail", email);

      // Navigate to /register or previous page
      navigate("/"); // Or replace with window.history.back() if needed
    } catch (error: any) {
      console.error("Error verifying OTP:", error.message);
      // Optionally set an error state here to show in the UI
    }
  };

  return { verifyOtp };
}
