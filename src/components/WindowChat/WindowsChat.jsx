import React, { useEffect, useState } from "react";
import { ListMessages } from "../ListMessages";

export const WindowsChat = ({ textMessage, name, isYou }) => {
  const [boxUser, setBoxUses] = useState([]);

  useEffect(() => {
    setBoxUses((prevState) => [
      ...prevState,
      { name, text: textMessage, isYou },
    ]);
  }, [isYou, textMessage, name]);

  return <ListMessages messages={boxUser} />;
};
