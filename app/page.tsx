"use client";

import { useState } from "react";
import Navbar from "./_components/Navbar";
import Calculator from "./_components/Calculator";
import CalculationsLog from "./_components/CalculationsLog";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <CalculationsLog
        isOpen={isSidebarOpen}
        onToggleSidebar={handleToggleSidebar}
      />
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarOpen ? "mr-64" : "mr-0"
        }`}
      >
        <Navbar onToggleSidebar={handleToggleSidebar} />
        <div className="p-4 mt-16">
          <Calculator isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </div>
  );
}
