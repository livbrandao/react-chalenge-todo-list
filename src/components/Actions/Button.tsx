import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  className: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
