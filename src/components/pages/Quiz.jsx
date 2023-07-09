import { Data } from "../modules/GetData";
import ParseQuestions from "../modules/ParseQuestions";
import Questions from "./Questions";
import Error from "./Error";
import Loader from "./Loader";
import { SetTitle } from "../modules/SetTitle";

function Quiz(props) {
  const { ToggleGame } = props;
  const { data, error } = Data();

  SetTitle("Quizirio - Loading");

  return (
    <>
      {!data && !error && <Loader />}

      {data && (
        <Questions
          data={ParseQuestions(data)}
          ToggleGame={ToggleGame}
        />
      )}

      {error && (
        <Error
          error={error}
          ToggleGame={ToggleGame}
        />
      )}
    </>
  );
}

export default Quiz;
