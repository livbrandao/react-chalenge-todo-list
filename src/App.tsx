import React, { useState, useEffect } from "react";
import { InputField } from "./components/InputField/InputField";
import { TaskList } from "./components/Tasks/TaskList";

type Task = {
  text: string;
  completed: boolean;
};

export function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [newTask, setNewTask] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const editTask = (index: number, newText: string) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <InputField
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>

      <InputField
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        placeholder="Filtrar tarefas"
      />

      <TaskList
        tasks={tasks.filter((task) =>
          task.text.toLowerCase().includes(filterText.toLowerCase())
        )}
        onEdit={editTask}
        onToggle={toggleTaskCompletion}
        onRemove={removeTask}
      />
    </div>
  );
}
