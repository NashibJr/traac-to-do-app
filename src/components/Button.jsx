import React from "react";

const Button = ({ icon, label, ...props }) => {
  return (
    <button {...props}>
      {icon && icon} {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
