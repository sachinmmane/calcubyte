import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface SampleInputDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SampleInputDialog: React.FC<SampleInputDialogProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      data-testid="dialog-content"
    >
      <div className="relative bg-white p-6 rounded shadow-lg w-1/4">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold mb-4">Input Strings Rule</h2>
        <h4 className="text-lg font-semibold mb-2">
          Input numbers separated by any delimiter
        </h4>
        <p className="mb-2">like this:</p>
        <p className="mb-1">
          <strong>Input:</strong> 1,5,3,7,26,56{" "}
          <span>, in this example delimiter is = [,] </span>
        </p>
        <p className="mb-4">
          <strong>Output:</strong> 98
        </p>

        <p className="mb-1">
          <strong>Input:</strong> 4*6*3*7
          <span>, in this example delimiter is = [*] </span>
        </p>
        <p className="mb-4">
          <strong>Output:</strong> 20
        </p>

        <p>Delimiter should be consistence</p>
        <p className="mb-1">
          <strong>Input:</strong> 4,6*3#7,2
          <span>, in this example delimiter is = [*] </span>
        </p>
        <p className="mb-4">
          <strong>Output:</strong>{" "}
          <span className="text-red-300">Invalid Input!</span>
        </p>
      </div>
    </div>
  );
};

export default SampleInputDialog;
