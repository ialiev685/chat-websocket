import { useState } from "react";

import { WindowsChat } from "./components/WindowChat";
import { ControllerChat } from "./components/ControllerChat";

const App = () => {
  const [massage, setMessage] = useState("");

  const handleSendMessage = (msg) => {
    setMessage(msg);
  };
  return (
    <div className="App">
      <WindowsChat textMessage={massage} />
      <ControllerChat onSendMessage={handleSendMessage} />
    </div>
  );
};

export default App;
