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
    <div>
      <h1>Lista de Tarefas</h1>

      <div>
        <input
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>

      <div>
        <h2>Filtros</h2>
        <div>
          <button onClick={() => setFilterType("all")}>Todas</button>
          <button onClick={() => setFilterType("completed")}>Concluídas</button>
          <button onClick={() => setFilterType("incomplete")}>
            Não concluídas
          </button>
        </div>
        <input
          type="text"
          placeholder="Filtrar por texto"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
      </div>

      <div>
        <h2>Ações</h2>
        <button onClick={handleMarkAllAsCompleted}>
          Marcar todas como concluídas
        </button>
        <button onClick={handleDeleteCompletedTasks}>
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
  );
};
