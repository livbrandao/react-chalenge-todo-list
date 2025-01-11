import React from "react";
import { TaskItem } from "./TaskItem";

type Task = {
  text: string;
  completed: boolean;
};

interface TaskListProps {
  tasks: Task[];
  onEditTask: (index: number, newText: string) => void;
  onRemove: (index: number) => void;
  onToggle: (index: number) => void;
  loading: boolean;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEditTask,
  onRemove,
  onToggle,
  loading,
}) => {
  return (
    <ul className="mt-10">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onEditTask={onEditTask}
          onRemove={onRemove}
          onToggle={onToggle}
          loading={loading}
        />
      ))}
    </ul>
  );
};

export default TaskList;
