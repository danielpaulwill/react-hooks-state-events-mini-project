import React from "react";
import Task from "./Task"

function TaskList({ tasks, categories, onDeleteTask }) {
  // console.log(tasks, categories)

  const taskListArray = tasks.map((task) => (
    <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} /> 
  ))
  return (
    <div className="tasks">
       {taskListArray}
    </div>
  );
}

export default TaskList;
