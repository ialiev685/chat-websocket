import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const ControllerChat = ({ onSendMessage, onAddText, value }) => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (value === "") return;
    onSendMessage();
    onAddText("");
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
        <InputGroup className="mt-2">
          <Form.Control
            autoComplete="off"
            type="text"
            name="text"
            value={value}
            onChange={(e) => onAddText(e.target.value)}
          />
          <Button type="submit" variant="success">
            Отправить
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};
