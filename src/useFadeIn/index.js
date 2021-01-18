import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useFadeIn = (duration = 1, delay = 1) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
function App() {
  const el = useFadeIn(1, 2);
  const fadeInP = useFadeIn(1, 4);
  return (
    <div className="App">
      <h1 {...el}>Hi</h1>
      <h1 {...fadeInP}>lorem </h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
