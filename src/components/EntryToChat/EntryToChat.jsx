import React from "react";

export const EntryToChat = ({ connect, onAddUser, value }) => {
  const handleAddName = (e) => {
    e.preventDefault();
    connect();
  };

  return (
    <div>
      <form onSubmit={handleAddName}>
        <input
          autoComplete="off"
          type="text"
          placeholder="введите имя"
          value={value}
          onChange={(e) => onAddUser(e.target.value)}
          required
        />
      </form>
    </div>
  );
};
