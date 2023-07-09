import { useState } from "react";
import "../css/Normalize.css";
import "../css/App.css";
import "../css/Animations.css";
import NewQuiz from "./pages/NewQuiz";
import Quiz from "./pages/Quiz";

function App() {
  const [newGame, SetNewGame] = useState(true);

  function ToggleGame() {
    SetNewGame((oldState) => !oldState);
  }

  return (
    <>
      {newGame && <NewQuiz ToggleGame={ToggleGame} />}
      {!newGame && <Quiz ToggleGame={ToggleGame} />}
    </>
  );
}

export default App;
