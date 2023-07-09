import { useState } from "react";

function Answer(props) {
  const { questionID, answersArray, SetSelectedAnswer, isSubmit } = props;
  const [answers, SetAnswers] = useState(answersArray);

  function HandleChange(answer, id) {
    SetSelectedAnswer(questionID, answer);

    const newAnswers = answers.map((a) => {
      // reset check property
      if (a.isChecked) {
        a.isChecked = false;
      }

      // return new value
      return a.id === id ? { ...a, isChecked: !a.isChecked } : a;
    });

    SetAnswers(newAnswers);
  }

  return answers.map((a) => {
    const { id, answer, isChecked, isCorrect } = a;
    return (
      <button
        key={id}
        onClick={() => HandleChange(answer, id)}
        disabled={isSubmit}
        className={`button-v01 button-v01-large button-v03
        ${isChecked ? "checked" : ""}        
        ${isSubmit ? (isCorrect ? "correct disabled" : "disabled") : ""}
        ${isSubmit ? (isChecked && !isCorrect ? "incorrect" : "") : ""}
        `}
      >
        {answer}
      </button>
    );
  });
}

export default Answer;
