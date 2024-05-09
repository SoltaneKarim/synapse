import React from "react";
import backgroundImage from "../assets/back5.avif"; // Importing the image

const Hero = () => {
  return (
    <div
      className="isolate"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: "cover", // Cover the entire background
        backgroundPosition: "center", // Center the background image
        width: "100vw", // Full width of the viewport
        height: "100vh", // Full height of the viewport
        margin: 0, // Remove default margin
        padding: 0, // Remove default padding
        overflow: "hidden" // Prevent overflow
      }}
    >
      {/* Content of your Hero component */}
    </div>
  );
};

export default Hero;
