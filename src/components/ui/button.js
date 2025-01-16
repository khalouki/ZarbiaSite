// src/components/ui/button.js
import React from 'react';

export const Button = ({ children, onClick, className, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 bg-black text-white rounded-md hover:bg-black/90 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
