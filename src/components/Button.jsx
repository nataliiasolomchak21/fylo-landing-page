import React from "react";

const Button = ({ children, className }) => {
  return (
    <div>
      <button
        className={`text-white font-raleway font-fontWeight700 text-sm bg-gradient-to-br from-callToActionCyan to-callToActionBlue mt-6 p-3 rounded-3xl mx-auto ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
