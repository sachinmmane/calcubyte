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
      <div className="relative bg-white p-6 rounded shadow-lg w-1/2">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
        </button>
        <h2 className="text-xl font-bold mb-4">Sample Input Strings</h2>
        <h6 className="text-lg font-semibold mb-2">
          1. The calculator can take up to two numbers, separated by commas, and
          will return their sum.
        </h6>
        <p className="mb-2 pl-6">for example “” or “1” or “1,2” as inputs.</p>
        <h6 className="text-lg font-semibold mb-2">
          2. The calculator can handle an any amount of numbers.
        </h6>
        <h6 className="text-lg font-semibold mb-2">
          3. The calculator can handle new lines between numbers (instead of
          commas).
        </h6>
        <p className="mb-2 pl-6">for example “1\n2,3” (will equal 6).</p>
        <h6 className="text-lg font-semibold mb-2">
          4. The calculator can support different delimiters.
        </h6>
        <p className="mb-2 pl-6">
          - to change a delimiter, the beginning of the string will contain a
          separate line that looks like this: “//[delimiter]\n[numbers…]”.
          <p className="mb-2 pt-2">
            for example “//;\n1;2” should return three where the default
            delimiter is ‘;’
          </p>
          - the first line is optional. all existing scenarios should still be
          supported
        </p>
        <h6 className="text-lg font-semibold mb-2">
          5. The calculator ingnored numbers which is bigger than 1000.
        </h6>
        <p className="mb-2 pl-6">for example “2 + 1001 = 2”</p>
        <h6 className="text-lg font-semibold mb-2">
          6. Delimiters can be of any length with the following format:
          “//[delimiter]\n”
        </h6>
        <p className="mb-2 pl-6">
          for example “//[***]\n1***2***3” should return 6
        </p>
      </div>
    </div>
  );
};

export default SampleInputDialog;
