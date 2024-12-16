interface ProgressBarSymbolProps {
  current: boolean;
  correct: boolean;
  completed: boolean;
}

const ProgressBarSymbol = ({ current, correct, completed }: ProgressBarSymbolProps) => {
  return (
    <div data-testid="progressBarSymbol">
      {current ? (<p data-testid="oIcon">O</p>) :
      completed ? 
      correct ? ( 
        <p data-testid="checkmarkIcon">✅</p> 
      ) : (
        <p>❌</p>
      ) : 
      <p data-testid="oIcon">O</p>}
    </div>
  );
};

export default ProgressBarSymbol;