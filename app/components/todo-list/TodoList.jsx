"use client";
import { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault(); // Prevent form submission
    if (!task.trim()) return; // Ignore empty submissions
    setTasks([...tasks, task]);
    setTask(""); // Clear input after submission
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-gray-800 text-white p-5 max-w-md mx-auto rounded-lg mt-10">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <form onSubmit={addTask} className="mb-4">
        <input
          className="text-gray-900 p-2 mr-2 rounded"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
          data-id="task-input"
        />
        <button
          data-id="add-task-btn"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add Task
        </button>
      </form>
      <ul data-id="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            data-id={`task-${index}`}
            className="flex justify-between items-center mb-2"
          >
            <span>{task}</span>
            <button
              data-id={`remove-task-${index}`}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
              onClick={() => removeTask(index)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
