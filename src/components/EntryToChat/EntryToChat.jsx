import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Button";

export const EntryToChat = ({ connect, onAddUser, value }) => {
  const handleAddName = (e) => {
    e.preventDefault();
    connect();
  };

  return (
    <div>
      <form onSubmit={handleAddName}>
        <Row>
          <Col xs={9}>
            <Form.Control
              autoComplete="off"
              type="text"
              placeholder="введите имя"
              value={value}
              onChange={(e) => onAddUser(e.target.value)}
              required
            />
          </Col>
          <Col xs={3}>
            <Button type="button">Войти</Button>
          </Col>
        </Row>
      </form>
    </div>
  );
};
