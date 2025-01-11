import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`p-2 md:px-4 md:py-2 rounded-lg text-white text-xs md:text-sm ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
