import React, { useState } from "react";

export const ControllerChat = ({ onSendMessage }) => {
  const [text, setText] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    onSendMessage(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
        <input
          autoComplete="off"
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};
