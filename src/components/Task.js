import React from "react";

function Task({ taskData, onDeleteTask }) {
  return (
    <div className="task">
      <div className="label">{taskData.category}</div>
      <div className="text">{taskData.text}</div>
      <button className="delete" onClick={onDeleteTask} id={taskData.text}>X</button>
    </div>
  );
}

export default Task;
