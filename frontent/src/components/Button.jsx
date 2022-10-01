import React from "react";

const Button = ({ text, ...rest }) => {
  return (
    <div className="button" {...rest}>
      {text}
    </div>
  );
};

export default Button;
