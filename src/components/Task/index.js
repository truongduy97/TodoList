import React from "react";
import validator from "validator";
export default function Task(props) {
  return (
    <div
      className={`${
        props.done ? "done" : ""
      } task card d-flex flex-row justify-content-between align-items-center mb-3`}
    >
      <div className="task-title p-2">
        {props.id} - {props.title}
      </div>
      <button className="button btn-danger p-2">X</button>
    </div>
  );
}
