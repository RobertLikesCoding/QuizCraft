import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import ProgressBar from "./ProgressBar";
import '@testing-library/jest-dom';

/**
* @vitest-environment jsdom
*/

describe("Progress Bar",()=> {
  it("should render the ProgressBarSymbol component", () => {
    render(<ProgressBar />); // Explicitly pass completed prop
    const progressBar = screen.getByTestId("progressBar");
    expect(progressBar).toBeInTheDocument();
  });
});