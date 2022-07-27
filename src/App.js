import "./App.css";
import Navbar from "./My Components/Navbar";
import Body from "./My Components/Body";
// import FinishedTasks from "./My Components/FinishedTasks";
import React, { useState } from "react";

function App() {
  const [todoList, settodoList] = useState([]);

  const [text, settext] = useState("");

  let Changes = (event) => {
    settext(event.target.value);
  };

  let funSettodoList = () => {
    settodoList([
      ...todoList,
      {
        id: todoList.length,
        value: text,
      },
    ]);
    console.log(todoList);
  };

  let funSetText = () => {};

  return (
    <div>
      <Navbar />
      <div className="border">
        <Body
          todoList={todoList}
          funSettodoList={() => funSettodoList}
          funSetText={() => funSetText}
          Changes={() => Changes}
          text={text}
        />
      </div>
    </div>
  );
}

export default App;
