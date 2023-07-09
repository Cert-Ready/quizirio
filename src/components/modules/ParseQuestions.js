import { nanoid } from "nanoid";
import { FisherYatesShuffle } from "./FisherYatesShuffle";

function ParseQuestions(data) {
  return data.results.map((result) => {
    const answersArray = result.incorrect_answers.map((incorrectAnswer) => {
      return {
        id: nanoid(),
        answer: atob(incorrectAnswer),
        isCorrect: false,
        isChecked: false,
      };
    });

    answersArray.push({
      id: nanoid(),
      answer: atob(result.correct_answer),
      isCorrect: true,
      isChecked: false,
    });

    FisherYatesShuffle(answersArray);

    return {
      id: nanoid(),
      question: atob(result.question),
      correctAnswer: atob(result.correct_answer),
      answersArray,
      selectedAnswer: undefined,
      isSelected: false,
    };
  });
}

export default ParseQuestions;
