import { Task } from "@/types/Task";

export const markAllAsCompleted = (tasks: Task[]): Task[] =>
  tasks.map((task) => ({ ...task, completed: true }));

export const deleteAllTasks = (tasks: Task[]): Task[] => [];
