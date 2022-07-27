import React from "react";
import Todo from "./Todo";
export default function Body(props) {
  // const [todoList, settodoList] = useState([]);
  // const [text, settext] = useState("");

  // let Changes = (event)=>{
  //   settext(event.target.value)
  // }

  // let funAddTask = ()=>{
  //     settodoList([ ...todoList, {
  //       id: todoList.length,
  //       value: text
  //     }])
  //     console.log(todoList)
  // }
  return (
    <>
      <div className="container my-4">
        <div className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Enter your task here"
            aria-label="Search"
            value={props.text}
            onChange={props.Changes()}
          />
          <button
            className="btn btn-outline-dark"
            onClick={props.funSettodoList()}
          >
            Add
          </button>
        </div>
      </div>
      {props.todoList.map((i) => {
        return (
          <Todo
            key={i.id}
            task={i.value}
            array={props.todoList}
            setArray={props.funSettodoList()}
          />
        );
      })}
    </>
  );
}
