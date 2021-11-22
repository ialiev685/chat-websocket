import React from "react";

export const ListMessages = ({ massages, name }) => {
  return (
    <div>
      {massages.map((item) => {
        const messageClassName = item.user === name ? "your" : "user";

        return (
          <p key={item.id} className={messageClassName}>
            {item.event === "connect"
              ? `Подключился пользователь ${item.user}`
              : `${item.user}:  ${item.message}`}
          </p>
        );
      })}
    </div>
  );
};
