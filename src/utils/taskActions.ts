import { Task } from "@/types/Task";

export const markAllAsCompleted = (tasks: Task[]): Task[] =>
  tasks.map((task) => ({ ...task, completed: true }));

export const deleteCompletedTasks = (tasks: Task[]): Task[] =>
  tasks.filter((task) => !task.completed);
