import React from "react";

const Button = ({ children, className }) => {
  return (
    <div>
      <button
        className={`text-white font-raleway font-fontWeight700 text-sm hover:bg-gradient-to-br hover:from-callToActionBlue hover:to-callToActionCyan bg-gradient-to-br from-callToActionCyan to-callToActionBlue mt-6 lg:mt-0 p-3 lg:w-[15rem] rounded-3xl mx-auto lg:mx-0 ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
