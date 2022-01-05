import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDeleteTask, selectedCategory }) {

  const taskListArray = tasks.map((task) => {
    if (selectedCategory === "All") {
      return <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} /> 
    } else if (selectedCategory === task.category) {
      return <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} /> 
    }
  })
  return (
    <div className="tasks">
       {taskListArray}
    </div>
  );
}

export default TaskList;
