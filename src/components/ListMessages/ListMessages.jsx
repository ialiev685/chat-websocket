import React from "react";

export const ListMessages = ({ messages }) => {
  return (
    <div>
      {messages.map((item, index) => {
        const messageClassName = item.isYou ? "your" : "user";
        const name = item.isYou ? "вы" : item.name;
        return (
          <p key={index} className={`${messageClassName}-message`}>
            {name}: {item.text}
          </p>
        );
      })}
    </div>
  );
};
