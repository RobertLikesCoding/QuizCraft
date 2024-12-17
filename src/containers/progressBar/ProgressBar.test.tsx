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
  it(`should contain correct amount of progress bar symbols based on questionsData prop`, () => {
    const data = [
      {
        current: false,
        correct: false, 
        completed: false,
      },
      {
        current: false,
        correct: false, 
        completed: false,
      },      {
        current: false,
        correct: false, 
        completed: false,
      },
    ];
    const dataLength = data.length;
    render(<ProgressBar questionsData={data} />); // Explicitly pass completed prop
    const progressBar = screen.getByTestId("progressBar");
    expect(progressBar.children.length).toBe(dataLength);
  });
});