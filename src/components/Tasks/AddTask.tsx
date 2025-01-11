import React from "react";

interface AddTaskProps {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  addTask: () => void;
  loading: boolean;
}

const AddTask: React.FC<AddTaskProps> = ({
  newTask,
  setNewTask,
  addTask,
  loading,
}) => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-center">
      <input
        type="text"
        className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Digite uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        className={`py-1 md:py-2 w-full sm:w-1/2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={addTask}
        disabled={loading}
      >
        {loading ? "Carregando..." : "Adicionar Tarefa"}
      </button>
    </div>
  );
};

export default AddTask;
