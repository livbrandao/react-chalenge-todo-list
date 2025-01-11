type Task = {
  text: string;
  completed: boolean;
};

export const filterTasks = (
  tasks: Task[],
  filterType: "all" | "completed" | "incomplete",
  filterText: string
): Task[] => {
  return tasks.filter((task) => {
    const matchesType =
      filterType === "all" ||
      (filterType === "completed" && task.completed) ||
      (filterType === "incomplete" && !task.completed);

    const matchesText = task.text
      .toLowerCase()
      .includes(filterText.toLowerCase());

    return matchesType && matchesText;
  });
};
