// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import "./styles.css";

// import "./styles.css";

// const useInput = (initialValue, validator) => {
//   const [value, setValue] = useState(initialValue);

//   const onChange = (event) => {
//     const {
//       target: { value },
//     } = event;

//     let willUpdate = true;
//     if (typeof validator === "function") {
//       willUpdate = validator(value);
//     }

//     if (willUpdate) {
//       setValue(value);
//     }
//   };

//   return { value, onChange };
// };

// function App() {
//   const maxLen = (value) => value.length <= 10;
//   const name = useInput("Mr.", maxLen);
//   return (
//     <div className="App">
//       <h1>Hello </h1>
//       <input placeholder="Name" {...name} />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

import React, { useState } from "react";
import ReactDOM from "react-dom";

const content = [
  {
    tab: "Section1",
    content: "I am the content of the Section 1",
  },
  {
    tab: "Section2",
    content: "I am the content of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
