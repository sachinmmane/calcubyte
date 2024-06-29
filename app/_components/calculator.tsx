"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import SampleInputDialog from "./SampleInputdialog";

const Calculator: React.FC<{ isSidebarOpen: boolean }> = ({
  isSidebarOpen,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div
      className={`flex flex-col items-center mt-40 transition-all duration-300 ${
        isSidebarOpen ? "mr-64" : "mr-0"
      }`}
    >
      <div className={`w-2/3 relative`}>
        <div
          className="flex justify-end items-center mb-2 text-gray-400 text-sm pointer-events-auto cursor-pointer"
          onClick={handleOpenDialog}
        >
          <FontAwesomeIcon
            icon={faInfoCircle}
            className="mr-1 w-4 h-4"
            data-testid="info-icon"
          />
          <span>Sample Input Strings</span>
        </div>
        <textarea
          className="w-full h-40 p-4 text-lg border border-gray-300 rounded"
          placeholder="Enter the String to calculate the sum."
        ></textarea>
      </div>
      <button className="px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-950 rounded hover:bg-blue-1000">
        Calculate
      </button>
      <SampleInputDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default Calculator;
