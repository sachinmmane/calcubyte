"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Calculator: React.FC = () => {
  return (
    <div className="flex flex-col items-center mt-40">
      <div className="w-1/2 relative">
        <div className="flex justify-end items-center mb-2 text-gray-400 text-sm pointer-events-auto">
          <FontAwesomeIcon icon={faInfoCircle} className="mr-1 w-4 h-4" />
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
    </div>
  );
};

export default Calculator;
