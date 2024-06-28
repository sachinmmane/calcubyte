import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Calculator from "../app/_components/Calculator";

describe("Calculator", () => {
  it("should render the input textarea", () => {
    render(<Calculator />);
    const textarea = screen.getByPlaceholderText(
      "Enter the String to calculate the sum."
    );
    expect(textarea).toBeInTheDocument();
  });

  it("should render the Calculate button", () => {
    render(<Calculator />);
    const calculateButton = screen.getByRole("button", { name: /calculate/i });
    expect(calculateButton).toBeInTheDocument();
  });

  it("should render the info icon with text", () => {
    render(<Calculator />);
    const infoText = screen.getByText("Sample Input Strings");
    expect(infoText).toBeInTheDocument();
    const infoIcon = screen.getByRole("img", { hidden: true });
    expect(infoIcon).toHaveClass("fa-circle-info");
  });
});
