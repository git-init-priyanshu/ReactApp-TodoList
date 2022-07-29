import "./App.css";
import Navbar from "./My Components/Navbar";
import Body from "./My Components/Body";
import Todo from "./My Components/Todo";
import FinishedTasks from "./My Components/FinishedTasks";
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
      ...todoList,//"..." is a spread operator. This allows us to add todoList array elements and a new element
      {
        id: todoList.length,
        value: text,
      },
    ]);
    settext("");
  };

  let funDoneTasks = (temp) => {
    setTimeout(() => {
      settodoList(temp);
      setcompleatedTasks(temp);
    }, 300);
  };

  let funRemoveComponent = (temp) => {
    setTimeout(() => {
      settodoList(temp);
    }, 300);
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
      {compleatedTasks.length >0?
        <div className="border py-4">
          <FinishedTasks />
        </div>
      :''}
    </div>
  );
}

export default App;
