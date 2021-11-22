import React from "react";

export const ControllerChat = ({ onSendMessage, onAddText, value }) => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    onSendMessage();
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
        <input
          autoComplete="off"
          type="text"
          name="text"
          value={value}
          onChange={(e) => onAddText(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
