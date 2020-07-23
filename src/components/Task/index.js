import React from "react";

export default function Task(props) {
  const onClickDelete = event => {
    event.stopPropagation();
    props.deleteTask(props.id);
  };

  return (
    <div
      onClick={() => {
        props.updateTask(props.id);
      }}
      className={`${
        props.done ? "done" : ""
      } task card d-flex flex-row justify-content-between align-items-center mb-3`}
    >
      <div className="task-title p-2">
        {props.index + 1} - {props.title}
      </div>
      <button onClick={onClickDelete} className="button btn-danger p-2">
        X
      </button>
    </div>
  );
}
