import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }

  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListner("click", onClick);
      }
    };
  });
  return element;
};

function App() {
  const onClick = () => console.log("hi");
  const element = useClick(onClick);

  return (
    <div className="App">
      <div ref={element}>Hi</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
