"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import SampleInputDialog from "./SampleInputDialog";
import { calculate, saveLogs } from "../_utils/Caluclate";

const Calculator: React.FC<{
  isSidebarOpen: boolean;
  onLogs: any;
}> = ({ isSidebarOpen, onLogs }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState<number>(0);
  const [isResult, setIsResult] = useState(false);
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    updatedLogs();
  }, []);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCalculate = async () => {
    setIsResult(false);
    setIsError(false);
    try {
      const calculationResult = await calculate(inputValue);
      setResult(calculationResult);
      setIsResult(true);
      saveLogs(inputValue, calculationResult);
      updatedLogs();
    } catch (error: any) {
      if (error instanceof Error) {
        setError(error.message);
        setIsResult(false);
        setIsError(true);
      } else {
        setIsError(true);
        setError("An unknown error occurred");
        console.error("An unknown error occurred:", error);
      }
    }
  };

  const updatedLogs = () => {
    const storedLogs = localStorage.getItem("logs");
    if (storedLogs) {
      const parsedLogs: { input: string; output: number }[] =
        JSON.parse(storedLogs);
      onLogs(parsedLogs);
    }
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
          onChange={(e) => {
            setIsError(false);
            setIsResult(false);
            setInputValue(e.target.value);
          }}
        ></textarea>
      </div>
      <button
        className="px-4 py-2 mt-4 text-lg font-semibold text-white bg-blue-950 rounded hover:bg-blue-1000"
        onClick={handleCalculate}
      >
        Calculate
      </button>
      {isResult && <p data-testid="result">Result: {result}</p>}
      {isError && (
        <p className="text-red-400" data-testid="error">
          Error: {error}
        </p>
      )}
      <SampleInputDialog isOpen={isDialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default Calculator;
