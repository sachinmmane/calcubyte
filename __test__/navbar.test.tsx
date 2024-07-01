import React from "react";
import Navbar from "../app/_components/Navbar";

import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("should contain the calcubyte logo", () => {
    render(
      <Navbar
        onToggleSidebar={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const myElem = screen.getByAltText("Calcubyte Logo");
    expect(myElem).toBeInTheDocument();
  });
  it("should contain the Calculation Log button", () => {
    render(
      <Navbar
        onToggleSidebar={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const historyButton = screen.getByRole("button", {
      name: /Calculation Log/i,
    });
    expect(historyButton).toBeInTheDocument();
  });
});
