import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">calcubyte</div>
        <div>
          <button className="hover:text-gray-400 flex items-center bg-transparent border-none">
            <FontAwesomeIcon icon={faHistory} className="mr-2 h-4 w-4" />
            History
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
