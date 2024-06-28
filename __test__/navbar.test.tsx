import React from "react";
import Navbar from "../app/_components/Navbar";

import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  it("should contain the application name", () => {
    render(<Navbar />);
    const myElem = screen.getByText("calcubyte");
    expect(myElem).toBeInTheDocument();
  });
  it("should contain the History button", () => {
    render(<Navbar />);
    const historyButton = screen.getByRole("button", { name: /history/i });
    expect(historyButton).toBeInTheDocument();
  });
});
