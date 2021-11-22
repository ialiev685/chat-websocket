import { useState, useRef } from "react";

import { ControllerChat } from "./components/ControllerChat";
import { EntryToChat } from "./components/EntryToChat";
import { ListMessages } from "./components/ListMessages";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [massages, setMessages] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [conected, setConected] = useState(false);
  const socket = useRef();

  const connection = () => {
    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      const message = {
        event: "connect",
        user: name,
        id: uuidv4(),
      };
      setConected(true);

      socket.current.send(JSON.stringify(message));
      console.log("Соеденение установлено!");
    };

    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prevState) => [...prevState, message]);
    };
    socket.current.onclose = () => {
      console.log("Соеденение закрыто");
    };
  };

  const handleSendMessage = () => {
    const message = {
      event: "message",
      user: name,
      message: text,
      id: uuidv4(),
    };

    socket.current.send(JSON.stringify(message));
  };

  const showEntry = name && conected;
  return (
    <div className="App">
      {!showEntry && (
        <EntryToChat connect={connection} onAddUser={setName} value={name} />
      )}
      {conected && <ListMessages massages={massages} name={name} />}

      {conected && (
        <ControllerChat
          onAddText={setText}
          onSendMessage={handleSendMessage}
          value={text}
        />
      )}
    </div>
  );
};

export default App;
