import React from "react";

export const ListMessages = ({ messages }) => {
  return (
    <div>
      {messages.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};
