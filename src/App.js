import "./App.css";
import Navbar from "./My Components/Navbar";
import Body from "./My Components/Body";
import Todo from "./My Components/Todo";

// import FinishedTasks from "./My Components/FinishedTasks";
import React, { useState } from "react";

function App() {
  const [todoList, settodoList] = useState([]);

  const [compleatedTasks, setcompleatedTasks] = useState([]);

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
  };

  let funDoneTasks = (x) => {
    settodoList(x);
    setcompleatedTasks(x);
  };

  let funRemoveComponent = (x) => {
    settodoList(x);
  };

  return (
    <div>
      <Navbar />
      <div className="border">
        <Body funSettodoList={() => funSettodoList} Changes={() => Changes} />
        {todoList.map((i) => {
          return (
            <Todo
              key={i.id}
              task={i.value}
              array={todoList}
              done={(x) => funDoneTasks(x)}
              remove={(x) => funRemoveComponent(x)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
