import React, { useState } from "react";

export default function Todo(props) {
  // const [dis, setdis] = useState(true);

  // const [text, settext] = useState(props.task);

  const [transition, settransition] = useState({
    opacity: "100%",
    transition: "opacity 2s",
  });

  let funDone = () => {
    let temp = props.array.filter((i) => {
      return i.value != props.task;
    });
    props.done(temp);
    settransition({ opacity: "0%", transition: "opacity 0.5s" });
  };

  // let funEdit = () => {
  //   setdis(false);

  //   console.log("funEdit");
  //   let temp = props.array.filter((i) => {
  //     return i.value != props.task;
  //   });
  // };
  // let funOnChange = (event) => {
  //   settext(event.target.value);
  // };

  let funRemove = () => {
    let temp = props.array.filter((i) => {
      return i.value != props.task;
    });
    props.remove(temp);
    settransition({ opacity: "0%", transition: "opacity 0.5s" });
  };

  return (
    <>
      <div className="container" style={transition}>
        <p className="d-flex">
          <input
            className="form-control"
            type="text"
            placeholder={props.task}
            // disabled
          />
          <button className="btn btn-success mx-2" onClick={() => funDone()}>
            Done
          </button>
          {/* <button
            className="btn btn-primary"
            value={text}
            onChange={() => funOnChange()}
            onClick={() => funEdit()}
          >
            Edit
          </button> */}
          <button className="btn btn-danger" onClick={() => funRemove()}>
            Remove
          </button>
        </p>
      </div>
    </>
  );
}
