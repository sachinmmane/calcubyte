import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import Calculator from "../app/_components/Calculator";

describe("Calculator", () => {
  it("should render the input textarea", () => {
    render(<Calculator isSidebarOpen={false} onLogs={undefined} />);
    const textarea = screen.getByPlaceholderText(
      "Enter the String to calculate the sum."
    );
    expect(textarea).toBeInTheDocument();
  });

  it("should render the Calculate button", () => {
    render(<Calculator isSidebarOpen={false} onLogs={undefined} />);
    const calculateButton = screen.getByRole("button", { name: /calculate/i });
    expect(calculateButton).toBeInTheDocument();
  });

  it("should render the info icon with text", () => {
    render(<Calculator isSidebarOpen={false} onLogs={undefined} />);
    const infoText = screen.getByText("Sample Input Strings");
    expect(infoText).toBeInTheDocument();
    const infoIcon = screen.getByRole("img", { hidden: true });
    expect(infoIcon).toHaveClass("fa-circle-info");
  });
  it("should open and close the dialog when clicking on Sample Input Strings", () => {
    render(<Calculator isSidebarOpen={false} onLogs={undefined} />);
    const infoText = screen.getByText("Sample Input Strings");

    // Click to open dialog
    fireEvent.click(infoText);
    const dialog = screen.getByTestId("dialog-content");
    expect(dialog).toBeInTheDocument();

    // Click to close dialog
    const closeButton = screen.getByLabelText("Close");
    fireEvent.click(closeButton);
    expect(dialog).not.toBeInTheDocument();
  });
});
