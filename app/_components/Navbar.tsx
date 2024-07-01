import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logo from "/public/logo.png";
interface NavbarProps {
  onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <nav className="p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold absolute left-auto transform -translate-x-1/2">
          <Image src={logo} alt="Calcubyte Logo" width={150} height={40} />{" "}
        </div>
        <div
          className={`flex transition-all duration-300 justify-end w-full ml-auto`}
        >
          <button
            className="hover:text-gray-400 flex items-center bg-transparent border-none"
            onClick={onToggleSidebar}
          >
            <FontAwesomeIcon icon={faHistory} className="mr-2 h-4 w-4" />
            <span className="hidden md:inline">Calculation Log</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
