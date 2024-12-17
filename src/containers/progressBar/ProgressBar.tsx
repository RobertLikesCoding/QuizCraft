import ProgressBarSymbol from "../../components/progressBarSymbol/ProgressBarSymbol";


interface QuestionData {
  current: boolean;
  correct: boolean; 
  completed: boolean;
}


interface ProgressBarProps {
  questionsData?: Array<QuestionData>;
};

const ProgressBar = ({ questionsData }: ProgressBarProps) => {
  if (!questionsData) questionsData = [];
  return (
    <div data-testid="progressBar">
      {questionsData.map((questionData, index) => ( 
        <ProgressBarSymbol
          key={index}
          current={questionData.current}
          correct={questionData.correct} 
          completed={questionData.completed}
        />
      ))}
    </div>
  );
};

export default ProgressBar;