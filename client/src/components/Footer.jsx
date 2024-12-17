import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  const checkIfAtBottom = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (scrollPosition >= documentHeight) {
      setIsAtBottom(true);
    } else {
      setIsAtBottom(false);
    }
  };

  useEffect(() => {
    // Check if user is at the bottom of the page initially
    checkIfAtBottom();

    // Add event listener for scroll event
    window.addEventListener("scroll", checkIfAtBottom);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", checkIfAtBottom);
    };
  }, []);

  return (
    <div
      className={`${
        isAtBottom ? "block" : "hidden"
      } fixed bottom-0 left-0 right-0 py-8 text-center text-white bg-black bg-opacity-50 backdrop-blur-lg`}
    >
      <div className="relative z-10">
        <p className="text-lg opacity-80">
          &copy; 2024 LearnSphere. All Rights Reserved.
        </p>
        <p className="mt-2 text-sm opacity-60">
          Powered by LearnSphere - Empowering your future.
        </p>
      </div>
    </div>
  );
};

export default Footer;
