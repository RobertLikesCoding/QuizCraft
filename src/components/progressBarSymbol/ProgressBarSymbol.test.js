import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest"; // Import from vitest
import ProgressBarSymbol from "./ProgressBarSymbol";

describe("ProgressBarSymbol", () => {
  it("should render the ProgressBarSymbol component", () => {
    render(<ProgressBarSymbol />);
    const progressBarSymbol = screen.getByTestId("progressBarSymbol");
    expect(progressBarSymbol).toBeInTheDocument();
  });
});
