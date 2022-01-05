import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)

  function handleDeleteTask(e) {
    console.log(e.target)
    const newTaskArray = taskArray.filter((task) => task !== e.target)
    setTaskArray(newTaskArray)
    console.log(newTaskArray)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList tasks={taskArray} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
