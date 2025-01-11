import React, { useState } from "react";

type Task = {
  text: string;
  completed: boolean;
};

interface TaskListProps {
  tasks: Task[];
  onEditTask: (index: number, newText: string) => void;
  onRemove: (index: number) => void;
  onToggle: (index: number) => void;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEditTask,
  onRemove,
  onToggle,
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState<string>("");

  const startEditing = (index: number, text: string) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const saveEditing = () => {
    if (editingIndex !== null) {
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
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <div>
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
              />
              <button onClick={saveEditing}>Salvar</button>
              <button onClick={cancelEditing}>Cancelar</button>
            </div>
          ) : (
            <div>
              <span>{task.text}</span>
              <button onClick={() => startEditing(index, task.text)}>
                Editar
              </button>
              <button onClick={() => onRemove(index)}>Remover</button>
              <button onClick={() => onToggle(index)}>
                {task.completed ? "Desmarcar" : "Concluir"}
              </button>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
