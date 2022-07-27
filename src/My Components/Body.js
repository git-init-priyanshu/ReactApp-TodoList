import React from 'react'

export default function Body() {
  return (
    <>
        <div className="container my-4">
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="text" placeholder="Enter your task here" aria-label="Search"/>
                <button class="btn btn-outline-dark" type="submit">Add</button>
            </form>
        </div>
    </>
  )
}
