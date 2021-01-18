import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission === "granted") {
      new Notification(title, options);
      console.log("granted");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        }
      });
    }
  };

  return fireNotif;
};
function App() {
  const triggerNotif = useNotification("Hello");
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hi</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
