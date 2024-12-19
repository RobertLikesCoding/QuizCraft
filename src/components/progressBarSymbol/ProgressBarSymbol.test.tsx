// import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProgressBarSymbol from "./ProgressBarSymbol";
import '@testing-library/jest-dom';

/**
* @vitest-environment jsdom
*/

describe("ProgressBarSymbol", () => {
  it("should render the ProgressBarSymbol component", () => {
    render(<ProgressBarSymbol correct={false} completed={false} current={false} />); // Explicitly pass completed prop
    const progressBarSymbol = screen.getByTestId("progressBarSymbol");
    expect(progressBarSymbol).toBeInTheDocument();
  });

  it("should render a checkmark icon when the completed prop is true and not current", () => {
    render(<ProgressBarSymbol correct={true} current={false} completed={true} />); // Explicitly pass completed prop
    const checkmarkIcon = screen.getByTestId("checkmarkIcon");
    expect(checkmarkIcon).toBeInTheDocument();
  });
  it("should render an x icon when the completed prop is false and not current", () => {
    render(<ProgressBarSymbol correct={false} current={false} completed={true} />); // Explicitly pass completed prop
    const xIcon = screen.getByText("❌");
    expect(xIcon).toBeInTheDocument();
  });
  it("should render an O icon when the current prop is true and not completed", () => {
    render(<ProgressBarSymbol current={true} correct={false} completed={false} />); // Explicitly pass current prop
    const oIcon = screen.getByTestId("oIcon");
    expect(oIcon).toBeInTheDocument();
  });
  it("should render a N icon when not the current prop and not completed.",() => {
    render(<ProgressBarSymbol current={false} correct={false} completed={false} />); // Explicitly pass current prop
    const oIcon = screen.getByTestId("notAttemptedIcon");
    expect(oIcon).toBeInTheDocument();
  });
});