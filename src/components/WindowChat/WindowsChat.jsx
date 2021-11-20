import React, { useEffect, useState } from "react";

export const WindowsChat = ({ textMessage }) => {
  const [box, setBox] = useState([]);

  useEffect(() => {
    const markupMessage = <p>{textMessage}</p>;
    setBox((prevState) => [...prevState, markupMessage]);
  }, [textMessage]);
  return (
    <div>
      <div className="your-box-message">{box}</div>
      <div className="another-box-message"></div>
    </div>
  );
};
