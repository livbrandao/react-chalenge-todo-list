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
    <li className="list-disc ml-3 sm:ml-4">
      {editingIndex === index ? (
        <div className="mb-6 flex flex-col sm:flex-row sm:gap-4 sm:items-center">
          <input
            className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 sm:mb-0 sm:w-3/4"
            type="text"
            value={editingText}
            onChange={(e) => setEditingText(e.target.value)}
          />
          <div className="flex gap-2">
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
        </div>
      ) : (
        <div className="flex w-full justify-between gap-4  mb-6 flex-col md:flex-row ">
          <span className="text-gray-600 text-sm sm:text-base md:text-lg text-start break-all">
            {task.text}
          </span>
          <div className="gap-1 md:gap-2 flex mt-2 md:mt-0">
            <button
              className="bg-yellow-500 text-white px-2 md:px-4 rounded-lg hover:bg-yellow-600 text-sm"
              onClick={() => startEditing(index, task.text)}
            >
              Editar
            </button>
            <button
              className="bg-red-500 text-white px-2 md:px-4 rounded-lg hover:bg-red-600 text-sm"
              onClick={() => onRemove(index)}
            >
              Remover
            </button>
            <button
              className={`${
                task.completed
                  ? "bg-teal-500 hover:bg-teal-300"
                  : "bg-emerald-950 hover:bg-emerald-800"
              } text-white px-2 md:px-4 py-1 rounded-lg text-sm`}
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
