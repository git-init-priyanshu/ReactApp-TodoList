import React from "react";
export default function Body(props) {
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
    </>
  );
}
