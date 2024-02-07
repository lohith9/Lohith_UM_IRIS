import React from 'react';

// The CategoryList component is responsible for displaying a list of book categories.
function CategoryList({ categories, onSelectCategory, selectedCategories }) {
  // Render a button for each category in the list.
  return (
    <div>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          style={{ backgroundColor: selectedCategories.has(category.id) ? 'lightgreen' : 'lightgray' }}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryList;

