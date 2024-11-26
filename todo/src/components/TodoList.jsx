import React from "react"; 
import { FaEdit, FaTrash } from "react-icons/fa";
const TodoList = ({text,id,isCompleted,deleteTodo,updateTodo,toggleCompleted }) => {
    return (
      <div className="  flex items-center gap-x-4 p-3 mb-0">
      {/* Checkbox for marking tasks as completed */}
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleCompleted(id)}
        className="form-checkbox h-5 w-5 text-green-500"
      />
       <div className="flex justify-between bg-sky-200 border-solid border-l-4 border-cyan-900 rounded-md h-11 w-[300px] pt-2 ">
      {/* Task text with strike-through for completed tasks */}
      <span
        className={`flex-1 text-lg font-medium pl-3 ${
          isCompleted ? "line-through text-slate-500 font-semibold px-2" : "text-gray-800"
        }`}
      >
        {text}
      </span>

      {/* Edit button */}
      <button
        className="text-blue-500 hover:text-blue-700 px-2 pb-2 mr-2"
        onClick={() => updateTodo(id)}
      >
        <FaEdit size={18} />
      </button>

      {/* Delete button */}
      <button
        className="text-red-500 hover:text-red-700 pb-2 mr-2"
        onClick={() => deleteTodo(id)}
      >
        <FaTrash size={18} />
      </button>
    </div>
    </div>
  );
}

export default TodoList