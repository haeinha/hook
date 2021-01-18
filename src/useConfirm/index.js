import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useConfirm = (message, callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  return confirmAction;
};

function App() {
  const deleteWorld = () => console.log("Deleting....");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("Are yo sure?", deleteWorld, abort);
  return (
    <div className="App">
      <div>Hi</div>
      <button onClick={confirmDelete}>Delete</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
