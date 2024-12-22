import ProgressBarSymbol from "../../components/progressBarSymbol/ProgressBarSymbol";

/**
 * Object for representing the state of a question within the quiz
 */
interface QuestionData {
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


interface ProgressBarProps {
  /**
   * Array of question data objects
   */
  questionsData: Array<QuestionData>;
};

const ProgressBar = ({ questionsData }: ProgressBarProps) => {
  if (!questionsData) questionsData = [];
  return (
    <div data-testid="progressBar">
      {questionsData.map((questionData, index) => ( 
        <ProgressBarSymbol
          key={index}
          isCurrent={questionData.isCurrent}
          isCorrect={questionData.isCorrect} 
          isCompleted={questionData.isCompleted}
        />
      ))}
    </div>
  );
};

export default ProgressBar;