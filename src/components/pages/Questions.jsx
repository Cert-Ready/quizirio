import { useState, useEffect } from "react";
import { SetTitle } from "../modules/SetTitle";
import Answer from "./Answer";

function Questions(props) {
  const { data, ToggleGame } = props;
  const [questionsData, SetQuestionsData] = useState(undefined);
  const [isSubmit, SetIsSubmit] = useState(false);
  const [hasAllAnswers, SetHasAllAnswers] = useState(false);
  const [count, SetCount] = useState(0);

  SetTitle("Quizirio - Questions");

  function PreventDefault(e) {
    return e.preventDefault();
  }

  function HandleBlankQuestions() {
    return questionsData.every((x) => x.isSelected);
  }

  function SetSelectedAnswer(questionID, answer) {
    const newData = questionsData.map((newData) => {
      if (newData.id === questionID) {
        return { ...newData, selectedAnswer: answer, isSelected: true };
      } else {
        return newData;
      }
    });

    SetQuestionsData(newData);
  }

  function CountCorrectAnswers() {
    questionsData.forEach((x) => {
      if (x.selectedAnswer === x.correctAnswer) SetCount((prev) => prev + 1);
    });
  }

  function CheckAnswers() {
    if (!HandleBlankQuestions()) {
      SetHasAllAnswers(true);

      setTimeout(() => {
        SetHasAllAnswers(false);
      }, 5000);
      return;
    }

    SetHasAllAnswers(false);
    CountCorrectAnswers();
    SetIsSubmit(true);
  }

  useEffect(() => {
    let isMounted = false;

    SetQuestionsData(data);

    return () => {
      isMounted = true;
    };
  }, [data]);

  return (
    <div className="center-el fade-in">
      <form onSubmit={PreventDefault}>
        <ul className="ul-v01">
          {questionsData &&
            questionsData.map((questionEl) => {
              const { id, question, answersArray } = questionEl;

              return (
                <li
                  key={id}
                  className="slide-up"
                >
                  <h3>{question}</h3>
                  <div className="answer-v01 flex">
                    <Answer
                      questionID={id}
                      answersArray={answersArray}
                      SetSelectedAnswer={SetSelectedAnswer}
                      isSubmit={isSubmit}
                    />
                  </div>
                  <hr className="separator-v01" />
                </li>
              );
            })}
        </ul>

        <div className="flex">
          {hasAllAnswers && (
            <p className={`button-v01-large text-center required shake`}>
              Please answer every question
            </p>
          )}

          {isSubmit && (
            <p className="button-v01-large score">
              You scored {count} / {questionsData.length} correct answers{" "}
              {count > 0 ? <span>&#128524;</span> : <span>&#128546;</span>}
            </p>
          )}

          <button
            onClick={isSubmit ? ToggleGame : CheckAnswers}
            className="button-v01 button-v01-large button-v02 align-right"
          >
            {isSubmit ? "New game" : "Check answers"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Questions;
