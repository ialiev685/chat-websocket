import React, { useState } from "react";

export const EntryToChat = ({ onAddName }) => {
  const [user, setUser] = useState("");

  const handleAddName = (e) => {
    e.preventDefault();
    setUser(e.target.value);
    onAddName(user);
    setUser("");
  };

  return (
    <div>
      <form onSubmit={handleAddName}>
        <input
          autoComplete="off"
          type="text"
          placeholder="введите имя"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
      </form>
    </div>
  );
};
