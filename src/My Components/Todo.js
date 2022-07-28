import React from "react";

export default function Todo(props) {
  let funDone = () => {
    let temp = props.array.filter((i) => {
      return i.value != props.task;
    });
    props.done(temp);
  };
  let funEdit = () => {
    console.log("funEdit");
  };

  let funRemove = () => {
    let temp = props.array.filter((i) => {
      return i.value != props.task;
    });
    props.remove(temp);
  };

  return (
    <>
      <div className="container">
        <p className="d-flex">
          <input
            className="form-control"
            type="text"
            placeholder={props.task}
            disabled
          />
          <button className="btn btn-success mx-2" onClick={() => funDone()}>
            Done
          </button>
          <button className="btn btn-primary" onClick={() => funEdit()}>
            Edit
          </button>
          <button className="btn btn-danger mx-2" onClick={() => funRemove()}>
            Remove
          </button>
        </p>
      </div>
    </>
  );
}
// removecomponent={props.task}
// onClick={props.remove(props.task)}
