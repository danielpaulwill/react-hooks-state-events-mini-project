import React from "react";
import Task from "./Task"

function TaskList({ tasks, selectedCategory, onDeleteTask }) {

  /*(selectedCategory === "All") ? <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} /> : <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} />)*/
  const taskListArray = tasks.map((task) => {
    if (selectedCategory === "All") {
      return <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} /> 
    } else if (selectedCategory === task.category) {
      return <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} /> 
    } return null
  })
  return (
    <div className="tasks">
       {taskListArray}
    </div>
  );
}

export default TaskList;
