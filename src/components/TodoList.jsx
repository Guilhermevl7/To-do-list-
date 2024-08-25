import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import vector from '../assets/vector.png'


function TodoList({ onTaskComplete }) {
  const { register, handleSubmit, reset } = useForm();

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (data) => {
    if (data.task.trim() && data.description.trim()) {
      setTasks([...tasks, { name: data.task, description: data.description }]);
      reset();
    }
  };

  const deleteTask = (taskToDelete) => {
    const updatedTasks = tasks.filter(
      (task) => task.name !== taskToDelete.name
    );
    if (updatedTasks.length < tasks.length) {
      setTasks(updatedTasks);
      onTaskComplete();
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(addTask)}>
        <h1>Add new to do</h1>
        <p>Task Name:</p>
        <input
          type="text"
          placeholder="New task"
          {...register("task", { required: true })}
        />
        <p>Task Description:</p>
        <textarea
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>

        <button type="submit">Create Todo</button>
      </form>

      <div className="tasks">
        <h2>To do</h2>
        {tasks.map((task, index) => (
          <div key={index} className="task-container">
            <p className="taskName">{task.name}</p>
            <p className="taskDescription">{task.description}</p>
            <p className="date">17 March 2021 at 08:00 PM</p>
            <button onClick={() => deleteTask(task)} className="delete-button">
              <img
                src={vector}
                alt="Delete task"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;