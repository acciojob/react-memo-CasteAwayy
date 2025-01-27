import React, { useState, useMemo } from "react";
import { ReactMemo } from "./ReactMemo.js";
import { UseMemo } from "./UseMemo.js";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, "New todo"]);
  };

  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  const handleSubmit = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask("");
    } else {
      alert("Task must be more than 5 characters long!");
    }
  };

  const memoizedTaskCount = useMemo(() => tasks.length, [tasks]);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Task Manager
      </h1>
      <button
        onClick={handleAddTask}
        style={{
          backgroundColor: "#007BFF",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        Add Todo
      </button>
      <button
        onClick={handleIncrement}
        style={{
          backgroundColor: "#28A745",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          border: "none",
          marginLeft: "8px",
          marginBottom: "16px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>
      <div style={{ marginTop: "16px" }}>
        <input
          type="text"
          value={customTask}
          onChange={(e) => setCustomTask(e.target.value)}
          placeholder="Enter custom task"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "8px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            backgroundColor: "#6F42C1",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
      <div style={{ marginTop: "24px" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>Tasks:</h2>
        {tasks.map((task, index) => (
          <ReactMemo key={index} task={task} />
        ))}
      </div>
      <UseMemo count={memoizedTaskCount} counter={counter} />
    </div>
  );
};

export default App;
