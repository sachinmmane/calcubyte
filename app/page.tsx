"use client";

import { useState } from "react";
import Navbar from "./_components/Navbar";
import Calculator from "./_components/Calcualtor";
import CalculationsLog from "./_components/CalculationsLog";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logs, setLogs] = useState<{ input: string; output: number }[]>([]);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogs = (allLogs: { input: string; output: number }[]) => {
    setLogs(allLogs);
  };

  const handleClearLogs = () => {
    localStorage.removeItem("logs");
    setLogs([]);
  };

  return (
    <div className="flex">
      <CalculationsLog
        onClearLogs={handleClearLogs}
        isOpen={isSidebarOpen}
        onToggleSidebar={handleToggleSidebar}
        logs={logs}
      />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "mr-64" : "mr-0"
        }`}
      >
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <div className="p-4 mt-16">
          <Calculator isSidebarOpen={isSidebarOpen} onLogs={handleLogs} />
        </div>
      </div>
    </div>
  );
}
