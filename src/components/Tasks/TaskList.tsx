import React from "react";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: { text: string; completed: boolean }[];
  onEdit: (index: number, newText: string) => void;
  onToggle: (index: number) => void;
  onRemove: (index: number) => void;
};

export function TaskList({ tasks, onEdit, onToggle, onRemove }: TaskListProps) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onEdit={onEdit}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}
