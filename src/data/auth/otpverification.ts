export async function sendEmailForOtp(email: string) {
  try {
    const res = await fetch(
      `http://localhost:5100/api/auth/send-otp/${email}`,
      {
        method: "POST", // Using POST method
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      }
    );

    const data = await res.json();
    console.log("data: ", data);

    if (!res.ok) {
      throw new Error(data.error || "Failed to send OTP");
    }

    console.log("OTP sent successfully:", data);
    return data;
    /* eslint-disable @typescript-eslint/no-explicit-any */
  } catch (error: any) {
    console.error("Error sending OTP:", error.message);
    throw new Error("Failed to send OTP: " + error.message);
  }
}
