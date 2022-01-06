import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskArray, setTaskArray] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [newTaskCategory, setNewTaskCategory] = useState("Code")
  const [details, setDetails] = useState("")

  function handleDeleteTask(e) {
    // const newTaskArray = taskArray.filter((task) => (task.text !==e.target.id) ? task : null)
      const newTaskArray = taskArray.filter((task) => {
        if (task.text !== e.target.id) {
          return task
        }})
    setTaskArray(newTaskArray)
  }

  function handleCategoryFilter(e) {
    setSelectedCategory(e.target.innerText)
  }

  function handleNewCategorySelect(e) {
    setNewTaskCategory(e.target.value)
  }

  function handleDetails(e) {
    setDetails(e.target.value)
  }

  function handleTaskFormSubmit(e) {
    e.preventDefault()
    const newTask = {text: details, category: newTaskCategory}
    const newTaskArray = [...taskArray, newTask]
    setTaskArray(newTaskArray)
    setDetails("")
    setNewTaskCategory("Code")
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        onCategoryClick={handleCategoryFilter}
        selectedCategory={selectedCategory}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onCategorySelect={handleNewCategorySelect}
        onTaskFormSubmit={handleTaskFormSubmit}
        onDetailsChange={handleDetails}
        details={details}
        newTaskCategory={newTaskCategory}
      />
      <TaskList
        tasks={taskArray} 
        selectedCategory={selectedCategory} 
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
