import { SetTitle } from "../modules/SetTitle";

function NewQuiz(props) {
  const { ToggleGame } = props;

  SetTitle("Quizirio");

  return (
    <div className="center-el fade-in text-center">
      <h2>Quizirio</h2>
      <p>Test your knowledge</p>
      <button
        onClick={ToggleGame}
        className="button-v01 button-v01-large button-v02"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default NewQuiz;
