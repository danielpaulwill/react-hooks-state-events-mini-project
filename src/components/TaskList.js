import React from "react";
import Task from "./Task"

function TaskList({ tasks, selectedCategory, onDeleteTask }) {

  const taskListArray = tasks.map((task) => /*(selectedCategory === "All") ? <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} /> : <Task key={task.text} taskData={task} onDeleteTask={onDeleteTask} />)*/
  {
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
