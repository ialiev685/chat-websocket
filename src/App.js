import { useState, useEffect } from "react";

import { WindowsChat } from "./components/WindowChat";
import { ControllerChat } from "./components/ControllerChat";
import { EntryToChat } from "./components/EntryToChat";
const ws = new WebSocket("ws://localhost:5000");

const App = () => {
  const [massage, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isYou, setIsYou] = useState(false);

  // useEffect(() => {
  //   if (name) {
  //     ws.onopen = () => console.log("соеденено");
  //     // ws.send(JSON.stringify(sendData));
  //     setStatus(true);
  //   }
  // }, [name]);

  ws.onmessage = ({ data }) => {
    console.log(data);
    // const { name, massage } = JSON.parse(data);
    // setMessage(massage);
    // setName(name);
    // setIsYou(false);
  };

  const handleAddName = (userName) => {
    setName(userName);
    setIsYou(true);
  };

  const handleSendMessage = (msg) => {
    setMessage(msg);
    const data = { name, massage };

    ws.send(JSON.stringify(data));
  };

  const send = name && massage;
  return (
    <div className="App">
      {!name && <EntryToChat onAddName={handleAddName} />}
      {send && <WindowsChat textMessage={massage} name={name} isYou={isYou} />}
      {name && <ControllerChat onSendMessage={handleSendMessage} />}
    </div>
  );
};

export default App;
