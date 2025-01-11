import React, { useState, useEffect } from "react";
import { filterTasks } from "./utils/filterTasks";
import { markAllAsCompleted, deleteCompletedTasks } from "./utils/taskActions";
import { Task } from "./types/Task";
import { TaskList } from "./components/Tasks/TaskList";
import { Filter } from "./components/Actions/Filter";
import { ActionButtons } from "./components/Actions/ActionButtons";
import { AddTask } from "./components/Tasks/Add.Task";

export const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState<string>("");
  const [filterType, setFilterType] = useState<
    "all" | "completed" | "incomplete"
  >("all");
  const [filterText, setFilterText] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask.trim(), completed: false }]);
    setNewTask("");
  };

  const editTask = (index: number, newText: string) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleMarkAllAsCompleted = () => {
    setTasks(markAllAsCompleted(tasks));
  };

  const handleDeleteCompletedTasks = () => {
    setTasks(deleteCompletedTasks(tasks));
  };

  const filteredTasks = filterTasks(tasks, filterType, filterText);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6 uppercase">
          Lista de Tarefas
        </h1>

        <AddTask newTask={newTask} setNewTask={setNewTask} addTask={addTask} />

        <Filter
          filterType={filterType}
          filterText={filterText}
          onFilterTypeChange={setFilterType}
          onFilterTextChange={setFilterText}
        />

        <ActionButtons
          onMarkAllAsCompleted={handleMarkAllAsCompleted}
          onDeleteCompletedTasks={handleDeleteCompletedTasks}
        />

        <TaskList
          tasks={filteredTasks}
          onEditTask={editTask}
          onRemove={removeTask}
          onToggle={toggleTaskCompletion}
        />
      </div>
    </div>
  );
};
