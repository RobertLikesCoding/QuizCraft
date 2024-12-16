import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProgressBarSymbol from "./ProgressBarSymbol";
import '@testing-library/jest-dom';

/**
* @vitest-environment jsdom
*/

describe("ProgressBarSymbol", () => {
  it("should render the ProgressBarSymbol component", () => {
    render(<ProgressBarSymbol completed={false} />); // Explicitly pass completed prop
    const progressBarSymbol = screen.getByTestId("progressBarSymbol");
    expect(progressBarSymbol).toBeInTheDocument();
  });

  it("should render a checkmark icon when the completed prop is true", () => {
    render(<ProgressBarSymbol completed={true} />); // Explicitly pass completed prop
    const checkmarkIcon = screen.getByTestId("checkmarkIcon");
    expect(checkmarkIcon).toBeInTheDocument();
  });
});