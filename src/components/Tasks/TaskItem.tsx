import React from "react";

type TaskItemProps = {
  task: { text: string; completed: boolean };
  index: number;
  onEdit: (index: number, newText: string) => void;
  onToggle: (index: number) => void;
  onRemove: (index: number) => void;
};

export function TaskItem({
  task,
  index,
  onEdit,
  onToggle,
  onRemove,
}: TaskItemProps) {
  return (
    <li>
      <input
        type="text"
        value={task.text}
        onChange={(e) => onEdit(index, e.target.value)}
      />
      <button onClick={() => onToggle(index)}>
        {task.completed ? "Desmarcar" : "Concluir"}
      </button>
      <button onClick={() => onRemove(index)}>Remover</button>
    </li>
  );
}
