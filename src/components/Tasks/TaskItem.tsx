import React, { useState } from "react";

type Task = {
  text: string;
  completed: boolean;
};

interface TaskItemProps {
  task: Task;
  index: number;
  onEditTask: (index: number, newText: string) => void;
  onRemove: (index: number) => void;
  onToggle: (index: number) => void;
  loading: boolean;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  index,
  onEditTask,
  onRemove,
  onToggle,
  loading,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const startEditing = (index: number, text: string) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const saveEditing = async () => {
    if (editingIndex !== null) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      onEditTask(editingIndex, editingText);
      setEditingIndex(null);
      setEditingText("");
    }
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <li className="list-disc ml-6">
      {editingIndex === index ? (
        <div className="mb-6">
          <input
            className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2"
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <button
            className={`bg-green-500 text-white px-4 py-1 rounded-lg hover:bg-green-600 text-sm mr-2 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={saveEditing}
            disabled={loading}
          >
            {loading ? "Carregando..." : "Salvar"}
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 text-sm"
            onClick={cancelEditing}
          >
            Cancelar
          </button>
        </div>
      ) : (
        <div className="flex w-full justify-between gap-4 items-center mb-4">
          <span className="text-gray-600 text-sm sm:text-lg md:text-lg">
            {task.text}
          </span>
          <div className="gap-2 flex">
            <button
              className="bg-yellow-500 text-white px-4 py-1 rounded-lg hover:bg-yellow-600 text-sm"
              onClick={() => startEditing(index, task.text)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 text-sm"
              onClick={() => onRemove(index)}
            >
              Remover
            </button>
            <button
              className="bg-emerald-950 text-white px-4 py-1 rounded-lg hover:bg-emerald-800 text-sm"
              onClick={() => onToggle(index)}
            >
              {task.completed ? "Desmarcar" : "Concluir"}
            </button>
          </div>
        </div>
      )}
    </li>
  );
};
