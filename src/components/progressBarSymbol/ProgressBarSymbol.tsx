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
  return (
    <div data-testid="progressBarSymbol">
      {isCurrent ? (<p data-testid="oIcon">O</p>) :
      isCompleted ? 
      isCorrect ? ( 
        <p data-testid="checkmarkIcon">✅</p> 
      ) : (
        <p>❌</p>
      ) : 
      <p data-testid="notAttemptedIcon">N</p>}
    </div>
  );
};

export default ProgressBarSymbol;