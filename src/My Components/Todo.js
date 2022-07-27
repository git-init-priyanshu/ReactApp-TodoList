import React from 'react'

export default function Todo(props) {
  return (
    <>
    <div className="container">
        <p className='d-flex'>
            <input class="form-control" type="text" placeholder={props.index} aria-label="Disabled input example" disabled/>
            <button className="btn btn-success mx-2">Done</button>
            <button className="btn btn-primary">Edit</button>
            <button className="btn btn-danger mx-2">Remove</button>
        </p>
    </div>
    </>
  )
}
