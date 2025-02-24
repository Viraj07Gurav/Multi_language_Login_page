import React, { useEffect } from "react";

const GoogleSignUp = () => {
    useEffect(() => {
        /* Load Google's OAuth 2.0 script */
        const script = document.createElement("script");
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const handleGoogleSignUp = () => {
        window.google.accounts.id.initialize({
            client_id: "939553776980-4c5e3vf84tjsndf5hrptj0735bv6in1p.apps.googleusercontent.com",
            callback: handleCredentialResponse,
        });

        window.google.accounts.id.prompt(); // Show Google sign-in popup
    };

    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);

        // Decode JWT Token (optional)
        const userInfo = JSON.parse(atob(response.credential.split(".")[1]));
        console.log("User Info:", userInfo);

        // Store user info in localStorage
        localStorage.setItem("user", JSON.stringify(userInfo));

        alert(`Welcome ${userInfo.name}!`);
    };

    return (
        <button onClick={handleGoogleSignUp} style={{ padding: "10px", background: "#db4437", color: "#fff", border: "none", cursor: "pointer" }}>
            Sign Up with Google
        </button>
    );
};

export default GoogleSignUp;
