import React, { useState } from "react";

export default function App() {
  // array of tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // if new task is not empty
    if (newTask.trim() !== "") {
      // update tasks list and set "newTask" to empty string
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index) {
    // filter tasks by index
    // "_" is curent element of array
    // "i" is index of this element
    // "index" is index of element to be deleted
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index) {
    // if this is not top task
    if (index > 0) {
      const updatedTasks = [...tasks];
      // swith needed task with prev one
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  // if this is not bottom task
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // swith needed task with next one
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="App">
      <h1>To Do List</h1>

      <div className="input-container">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />

        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-text">{task}</span>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>

            <button className="move-button" onClick={() => moveTaskUp(index)}>
            ▲
            </button>

            <button className="move-button" onClick={() => moveTaskDown(index)}>
            ▼
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}