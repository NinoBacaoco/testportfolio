import React, { useState } from "react";
import "./todo.css";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    if (newTasks.trim() !== "") {
      setTasks((t) => [...t, newTasks]);
      setNewTasks("");
    } else {
      // alert("cant input empty task");

      setShowModal(true);
    }
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }
  function closeModal() {
    setShowModal(false);
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="todo-list">
          <div className="todo">Newbie Todo List</div>
          <div>
            <input
              type="text"
              placeholder="enter task"
              value={newTasks}
              onChange={handleInputChange}
            />
            <button className="add-btn" onClick={addTask}>
              Add
            </button>
            {showModal && (
              <div className="modal-container">
                <div className="backdrop" onClick={closeModal}></div>
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="bg-purple-950 p-4 rounded shadow-2xl w-3/5">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="mt-2 py-4">
                      dumbass you can&#39;t input an empty task{" "}
                    </p>
                    <div className="m-0  modal-action">
                      <button
                        className="btn"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <ul>
            {tasks.map((task, index) => (
              <li className="tasklists" key={index}>
                <span className="input-task">{task}</span>
                <button
                  className="delete-btn"
                  onClick={() => deleteTask(index)}
                >
                  Delete
                </button>
                <button>up</button>
                <button>down</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
