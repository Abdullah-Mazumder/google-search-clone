import React from "react";

const Link = ({ link, text }) => {
  return (
    <div className="link">
      <a href={link} target="_blank" rel="noreferrer">
        {text}
      </a>
    </div>
  );
};

export default Link;
