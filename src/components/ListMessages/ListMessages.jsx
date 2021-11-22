import React from "react";
import "./ListMessages.scss";

export const ListMessages = ({ massages, name }) => {
  return (
    <div className="windows-massages">
      {massages.map((item) => {
        const messageClassName = item.user === name ? "your" : "user";
        const nameChat = item.user === name ? "Вы" : item.user;

        return item.event === "connect" ? (
          <p className="windows-massages__message windows-massages__message--connect ">{`Подключился пользователь ${item.user}`}</p>
        ) : (
          <p
            key={item.id}
            className={`windows-massages__message windows-massages__message--${messageClassName}-message`}
          >
            {`${nameChat}: ${item.message}`}
          </p>
        );
      })}
    </div>
  );
};
