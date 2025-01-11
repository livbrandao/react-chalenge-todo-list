import React from "react";

interface AddTaskProps {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
}

export const AddTask: React.FC<AddTaskProps> = ({
  newTask,
  setNewTask,
  addTask,
}) => {
  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className="w-1/2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={addTask}
      >
        Adicionar Tarefa
      </button>
    </div>
  );
};
