// App.jsx
import React, { useState } from "react";
import './index.css';
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

export default function App() {
  const [activeTab, setActiveTab] = useState("todo");
  const [taskInput, setTaskInput] = useState("");
  const [priority, setPriority] = useState("MEDIUM");
  const [pendingTasks, setPendingTasks] = useState([]);
  const [doneTasks, setDoneTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim()) {
      setPendingTasks([...pendingTasks, { text: taskInput, priority }]);
      setTaskInput("");
    }
  };

  const markDone = (index) => {
    const task = pendingTasks[index];
    setPendingTasks(pendingTasks.filter((_, i) => i !== index));
    setDoneTasks([...doneTasks, task]);
  };

  return (
    <div className="min-h-screen flex bg-[#212121] text-white font-sans px-6 py-10">
      <Sidebar />
      <Workspace
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        priority={priority}
        setPriority={setPriority}
        addTask={addTask}
        pendingTasks={pendingTasks}
        doneTasks={doneTasks}
        markDone={markDone}
      />
    </div>
  );
} 
