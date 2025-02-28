export const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user")); // Parse stored user data
    const isLoggedIn = localStorage.getItem("isAuthenticated"); // Check login status
    return user !== null && isLoggedIn === "true"; // Ensure both conditions are met
  };
  