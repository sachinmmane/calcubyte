import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface CalculationsLogProps {
  isOpen: boolean;
  onToggleSidebar: () => void;
  logs: any;
  onClearLogs: () => void;
}

const CalculationsLog: React.FC<CalculationsLogProps> = ({
  isOpen,
  onToggleSidebar,
  logs,
  onClearLogs,
}) => {
  return (
    <div
      className={`fixed h-auto inset-y-0 right-0 w-96 border-s-2  border-gray-300 bg-white p-4 transition-transform duration-300 z-30 ${
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
      <div className="overflow-y-auto max-h-full pb-10">
        <div>
          {logs.map((log: { input: string; output: string }, index: number) => (
            <div key={index} className="mb-4 border-b pb-4">
              <div className="flex items-center justify-between">
                <p className="w-70 truncate">
                  Input: <span className="font-bold">{log.input}</span>
                </p>
                <FontAwesomeIcon
                  icon={faEye}
                  className="ml-2 text-gray-400 cursor-pointer"
                />
              </div>
              <p>
                Output: <span className="font-bold">{log.output}</span>
              </p>
            </div>
          ))}
          {logs.length === 0 && <p>No history available.</p>}
        </div>

        <div>
          {logs.length > 0 && (
            <button
              className="px-4 text-lg font-semibold text-gray-400 border-2"
              onClick={onClearLogs}
            >
              Clear Logs
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalculationsLog;
