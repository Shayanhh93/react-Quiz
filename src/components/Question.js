import { useQuiz } from "../../src/contexts/QuizContext";
import Option from "./Option";

function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={question} />
    </div>
  );
}

export default Question;
