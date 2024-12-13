import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../../api/api";
import { useMutateFn } from "../../CustomHooks/tanstack";

const AddCategory = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [categoryName, setCategoryName] = useState("");

  const categorymutate = useMutateFn('categories')

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (categoryName.trim() === "") {
      alert("Category name cannot be empty");
      return;
    }
    const body = { name: categoryName }
    categorymutate(()=> createCategory(body));
    setCategoryName("");
    setIsAdding(false);
  };

  return (
    <div className="mt-4">
      <button
        onClick={() => setIsAdding((prev) => !prev)}
        className="hover:bg-orange-500 hover:text-white text-black bg-white border border-orange-300 py-2 px-4 rounded-lg"
      >
        {isAdding ? "Cancel" : "Add Category"}
      </button>
      {isAdding && (
        <form
          onSubmit={handleAddCategory}
          className="mt-4 flex items-center space-x-4"
        >
          <input
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md p-2"
          />
          <button
            type="submit"
            className="bg-yellow-600 text-white py-2 px-4 rounded-md hover:bg-yellow-700"
          >
            Save
          </button>
        </form>
      )}
    </div>
  );
};

export default AddCategory;
