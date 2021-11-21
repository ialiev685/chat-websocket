import React, { useEffect, useState } from "react";
import { ListMessages } from "../ListMessages";

export const WindowsChat = ({ textMessage }) => {
  const [box, setBox] = useState([]);

  useEffect(() => {
    setBox((prevState) => [...prevState, textMessage]);
  }, [textMessage]);
  console.log();
  return <ListMessages messages={box} />;
  // <div>
  //   <div className="your-box-message">{box}</div>
  //   <div className="another-box-message"></div>
  // </div>
};
