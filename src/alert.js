import React from "react";

export const Alert = ({ children, className }) => {
  return (
    <div className={`alert ${className}`} role="alert">
      {children}
    </div>
  );
};

export const AlertTitle = ({ children }) => {
  return <strong className="alert-title">{children}</strong>;
};

export const AlertDescription = ({ children }) => {
  return <p className="alert-description">{children}</p>;
};
