import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullscrren) {
        element.current.webkitRequestFullscrren();
      } else if (element.current.mozRequestFullScreen) {
        element.current.msRequestFullscreen();
      }

      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };

  return { element, triggerFull, exitFull };
};

function App() {
  const onFulls = (isFull) => {
    console.log(isFull ? "We are Full" : "We are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div ref={element} className="App">
      <img src="https://img.seoul.co.kr/img/upload/2017/10/07/SSI_20171007154542_V.jpg" />
      <button onClick={triggerFull}>Make Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
