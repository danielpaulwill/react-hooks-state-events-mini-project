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
  // const [isSelected, setIsSelected] = useState("All")

  function handleDeleteTask(e) {
    const newTaskArray = taskArray.filter((task) => {
      if (task.text !== e.target.id) {
        return task
      }})
    setTaskArray(newTaskArray)
  }

  function handleCategoryFilter(e) {
    setSelectedCategory(e.target.innerText)
    // setIsSelected(e.target.innerText)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES}
        onCategoryClick={handleCategoryFilter}
        selectedCategory={selectedCategory}
        // isSelected={isSelected}
      />
      <NewTaskForm />
      <TaskList tasks={taskArray} selectedCategory={selectedCategory} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
