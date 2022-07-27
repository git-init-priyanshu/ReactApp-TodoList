import React from "react";

export default function FinishedTasks() {
  return (
    <>
      <div className="container">
        <div class="btn-group">
          <button class="btn btn-secondary" type="button">
            Compleated Tasks
          </button>
          <button
            type="button"
            class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only"></span>
          </button>
          <div class="dropdown-menu">


          </div>
        </div>
      </div>

      <div className="container">
        <div className="d-box">
            
          <p>Compleated Tasks</p>
          <button
            type="button"
            class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="sr-only"></span>
          </button>
          <div class="dropdown-menu">


          </div>
        </div>
      </div>
    </>
  );
}
