const ProgressBarSymbol = ({ completed }: { completed: boolean }) => {
  return (
    <div data-testid="progressBarSymbol">
      {completed ? ( 
        <p data-testid="checkmarkIcon">✅</p> 
      ) : (
        <p>❌</p>
      )}
    </div>
  );
};

export default ProgressBarSymbol;