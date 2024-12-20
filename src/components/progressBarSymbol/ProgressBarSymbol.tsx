interface ProgressBarSymbolProps {
  /**
   * Whether the symbol represents the current question
   */
  isCurrent: boolean;
  /**
   * Whether the symbol represents a correct answer
   */
  isCorrect: boolean;
  /**
   * Whether the symbol represents a completed question
   */
  isCompleted: boolean;
}

const ProgressBarSymbol = ({ isCurrent, isCorrect, isCompleted }: ProgressBarSymbolProps) => {

  /**
   * Determines the correct symbol to display based on the props
   * @returns The jsx element representing the symbol
   */
  const insertSymbol = () => {
    if (isCurrent) {
      return (<p data-testid="oIcon">O</p>);
    } else if (isCompleted) {
      return isCorrect ? (<p data-testid="checkmarkIcon">✅</p>) : <p data-testid="xIcon">❌</p>;
    } else {
      return (<p data-testid="notAttemptedIcon">N</p>);
    }
  }

  return (
    <div data-testid="progressBarSymbol">
      {insertSymbol()}
    </div>
  );
};

export default ProgressBarSymbol;