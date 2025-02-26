import React from "react";

interface FilterProps {
  filterType: "all" | "completed" | "incomplete";
  filterText: string;
  onFilterTypeChange: (type: "all" | "completed" | "incomplete") => void;
  onFilterTextChange: (text: string) => void;
}

export const Filter: React.FC<FilterProps> = ({
  filterType,
  filterText,
  onFilterTypeChange,
  onFilterTextChange,
}) => {
  return (
    <div className="flex flex-col items-start mb-6 md:mb-4 md:first-line:mb-2">
      <div className="flex items-center md:w-full mb-2 gap-2">
        <p className="text-xs md:text-sm font-medium">Filtrar por:</p>

        {["all", "completed", "incomplete"].map((type) => (
          <button
            key={type}
            className={` p-2 md:px-4 md:py-1 text-xs md:text-sm bg-gray-200 rounded-lg hover:bg-gray-300 ${
              filterType === type ? "bg-blue-300" : ""
            }`}
            onClick={() =>
              onFilterTypeChange(type as "all" | "completed" | "incomplete")
            }
          >
            {type === "all"
              ? "Todas"
              : type === "completed"
              ? "Concluídas"
              : "Não concluídas"}
          </button>
        ))}
      </div>
      <input
        type="text"
        className="border rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Filtrar por texto"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
};
