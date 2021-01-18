import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

function App() {
  const begForLife = () => console.log("plz don't leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
