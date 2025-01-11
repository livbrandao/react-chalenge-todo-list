import React from "react";
import { Button } from "./Button";

interface ActionButtonsProps {
  onMarkAllAsCompleted: () => void;
  onDeleteCompletedTasks: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({
  onMarkAllAsCompleted,
  onDeleteCompletedTasks,
}) => {
  return (
    <div className="mb-4 flex flex-row gap-4 md:justify-end md:w-full justify-between">
      <Button
        text="Marcar todas como concluídas"
        onClick={onMarkAllAsCompleted}
        className="bg-green-500 hover:bg-green-600"
      />
      <Button
        text="Excluir todas concluídas"
        onClick={onDeleteCompletedTasks}
        className="bg-red-500 hover:bg-red-600"
      />
    </div>
  );
};
