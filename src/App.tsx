import React, { useState, useEffect } from "react";
import { filterTasks } from "./utils/filterTasks";
import { markAllAsCompleted, deleteCompletedTasks } from "./utils/taskActions";
import { Task } from "./types/Task";
import { TaskList } from "./components/Tasks/TaskList";

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

        <div className="mb-4 flex gap-2">
          <input
            type="text"
            className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Digite uma nova tarefa"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="w-1/2 bg-blue-500 text-white  rounded-lg hover:bg-blue-600"
            onClick={addTask}
          >
            Adicionar Tarefa
          </button>
        </div>

        <div className="flex flex-col items-start  mb-2">
          <div className="flex items-center w-full mb-1 gap-2">
            <p className=" text-sm font-medium ">Filtrar por:</p>

            <button
              className="px-4 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => setFilterType("all")}
            >
              Todas
            </button>
            <button
              className="px-4 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300"
              onClick={() => setFilterType("completed")}
            >
              Concluídas
            </button>
            <button
              className="px-4 py-1 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 "
              onClick={() => setFilterType("incomplete")}
            >
              Não concluídas
            </button>
          </div>
          <input
            type="text"
            className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Filtrar por texto"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </div>

        <div className="">
          <div className="mb-4 flex flex-row gap-4 justify-end w-full">
            <button
              className=" bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 "
              onClick={handleMarkAllAsCompleted}
            >
              Marcar todas como concluídas
            </button>
            <button
              className=" bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
              onClick={handleDeleteCompletedTasks}
            >
              Excluir todas concluídas
            </button>
          </div>

          <TaskList
            tasks={filteredTasks}
            onEditTask={editTask}
            onRemove={removeTask}
            onToggle={toggleTaskCompletion}
          />
        </div>
      </div>
    </div>
  );
};
