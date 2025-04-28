// http://35.154.187.94:5100/api/product/672c49008681df2dabc8ad20

import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function UseAddUser(formData: any) {
  const { data: user, isLoading: isSavingUser } = useQuery({
    queryFn: () => saveUser(formData),
    queryKey: ["user"],
  });
  return { user, isSavingUser };
}

export async function saveUser(formData: any) {
  const navigate = useNavigate(); // useNavigate is used inside the hook

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
    } else {
      console.error("Error:", data.message || "Failed to create user");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
}
