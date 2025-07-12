import React from "react";

export default function Workspace({
  activeTab,
  setActiveTab,
  taskInput,
  setTaskInput,
  priority,
  setPriority,
  addTask,
  pendingTasks,
  doneTasks,
  markDone,
}) {
  return (
    <div className="w-2/3 bg-[#2A2A2A] rounded-3xl p-8">
      {/* Navigation */}
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-xl font-semibold mb-2">Navigation</h2>
        <button
          className={`text-left px-4 py-2 rounded ${
            activeTab === "todo" ? "bg-blue-500 text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("todo")}
        >
          🌐 To Do List
        </button>
        <button
          className={`text-left px-4 py-2 rounded ${
            activeTab === "pending" ? "bg-blue-500 text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("pending")}
        >
          ⏳ To Do Pending
        </button>
        <button
          className={`text-left px-4 py-2 rounded ${
            activeTab === "done" ? "bg-blue-500 text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("done")}
        >
          ✅ Done Job
        </button>
      </div>

      {/* Panel */}
      <div>
        {activeTab === "todo" && (
          <div className="bg-[#2f2f2f] rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-bold text-blue-400 mb-2">What Do You Want To Do?</h2>
            <p className="text-sm text-gray-400 mb-4">{new Date().toDateString()}</p>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#212121] text-white border border-gray-600 mb-4"
              placeholder="Write here..."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 mb-4 rounded bg-[#212121] text-white border border-gray-600"
            >
              <option>LOW</option>
              <option>MEDIUM</option>
              <option>HIGH</option>
            </select>
            <button
              className="w-full p-2 bg-blue-500 rounded text-white font-bold"
              onClick={addTask}
            >
              Add Task →
            </button>
          </div>
        )}

        {activeTab === "pending" && (
          <div>
            <h2 className="text-lg font-bold mb-4">Pending Tasks</h2>
            {pendingTasks.length === 0 && (
              <p className="text-gray-400">No pending tasks.</p>
            )}
            <ul className="space-y-2">
              {pendingTasks.map((task, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-2 bg-[#333] rounded"
                >
                  <span>
                    {task.text} — <span className="text-sm text-blue-400">{task.priority}</span>
                  </span>
                  <button
                    className="bg-green-500 px-2 py-1 rounded text-sm"
                    onClick={() => markDone(i)}
                  >
                    Done
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "done" && (
          <div>
            <h2 className="text-lg font-bold mb-4">Done Tasks</h2>
            {doneTasks.length === 0 && (
              <p className="text-gray-400">No tasks completed yet.</p>
            )}
            <ul className="space-y-2">
              {doneTasks.map((task, i) => (
                <li
                  key={i}
                  className="p-2 bg-[#444] rounded text-green-400"
                >
                  {task.text} — <span className="text-sm">{task.priority}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
