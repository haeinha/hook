import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
function App() {
  const titleUpdater = useTitle("Loading...");
  setInterval(() => titleUpdater("HOME"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
