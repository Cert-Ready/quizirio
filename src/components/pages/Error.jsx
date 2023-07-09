import { SetTitle } from "../modules/SetTitle";
import ErrorImg from "../../assets/img/error-img.svg";

function Error(props) {
  const { error, ToggleGame } = props;

  SetTitle("Quizirio - Error");

  return (
    <div className="fade-in center-el">
      <h2>Uh oh...</h2>
      {/* <p>⛔ HTTP status: Error {error}</p> */}
      <p>We are experiencing problems</p>
      <p>Please try again later</p>
      <img
        src={ErrorImg}
        alt="error image"
        className="img-v01"
      />
      <button
        onClick={ToggleGame}
        className="button-v01 button-v01-large button-v02"
      >
        Try Again
      </button>
    </div>
  );
}

export default Error;
