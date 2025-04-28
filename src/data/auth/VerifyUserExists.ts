export const verifyUserExists = async (email: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `http://localhost:5100/api/auth/get-user-by-email/${email}`,
      {
        method: "GET", // Make a GET request
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Check if the response is OK (status in the range 200-299)
    if (!response.ok) {
      console.log("Request failed with status:", response.status);
      return false; // If not OK, assume user does not exist or other error occurred
    }

    // Try to parse the response as JSON
    const responseText = await response.text(); // Use text() to catch HTML errors
    let responseBody;

    try {
      responseBody = JSON.parse(responseText); // Parse as JSON if it's valid
    } catch (err) {
      // If parsing fails, it's likely an HTML response (error page), log and return false
      console.error("Error parsing response as JSON:", err);
      console.log("HTML response:", responseText); // Log the raw HTML for debugging
      return false; // Return false if response is not valid JSON
    }

    // If the responseBody contains a user (_id field), return true
    if (responseBody && responseBody._id) {
      return true; // User exists
    } else {
      return false; // No user found or no user data
    }
  } catch (error) {
    // Log any errors (network, JSON parsing, etc.)
    console.error("Error occurred:", error);
    return false; // Return false if any error occurs
  }
};
