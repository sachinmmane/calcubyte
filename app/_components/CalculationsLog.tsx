import React from "react";

interface CalculationsLogProps {
  isOpen: boolean;
  onToggleSidebar: () => void;
}

const CalculationsLog: React.FC<CalculationsLogProps> = ({
  isOpen,
  onToggleSidebar,
}) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-96 border-s-2  border-gray-300 bg-white p-4 transition-transform duration-300 z-30 ${
        isOpen ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div
        className="flex justify-between items-center mb-4"
        data-testid="sidebar"
      >
        <h2 className="text-xl font-bold">Calculation Log</h2>
        <button
          onClick={onToggleSidebar}
          className="text-gray-400 hover:text-gray-400 cursor-pointer"
        >
          Close
        </button>
      </div>
      <div>
        {/* Logs should be visible here */}
        <p>No history available.</p>
      </div>
    </div>
  );
};

export default CalculationsLog;
