import React from "react";

function CategoryFilter({ categories, onCategoryClick, selectedCategory }) {
  const categoryButtons = categories.map((category) => {
    if (category === selectedCategory) {
      return <button key={category} className="selected" onClick={onCategoryClick}>{category}</button>
  } else {
      return <button key={category} onClick={onCategoryClick}>{category}</button>
  }})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
