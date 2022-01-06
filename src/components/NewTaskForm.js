import React from "react";

function NewTaskForm({ categories, onCategorySelect, onTaskFormSubmit, onDetailsChange, details, newTaskCategory }) {
  const categoryOptions = categories.map((category) => (category !== "All") ? <option value={category} key={category}>{category}</option> : null)
  // {
  //   if (category !== "All") {
  //   return <option value={category} key={category}>{category}</option>
  // }})

    function handleOnSubmit(e) {
      e.preventDefault()
      const newTask = {text: details, category: newTaskCategory}
      onTaskFormSubmit(newTask)
    }

  return (
    <form className="new-task-form" onSubmit={handleOnSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={onDetailsChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onCategorySelect} value={newTaskCategory}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
