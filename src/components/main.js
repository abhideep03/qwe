import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./main.css";
import "../App.css";

function Main() {
  const { transcript, resetTranscript } = useSpeechRecognition({
    continuous: true,
  });

  const formatText = (command) => {
    document.execCommand(command, false, null);
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <>
      <div className="main">
        <h1>Convert now!!!</h1>
        <div class="main-container">
          <div className="format-line">
            <button onClick={() => formatText("bold")}>
              <b>B</b>
            </button>
            <button onClick={() => formatText("italic")}>
              <i>I</i>
            </button>
            <button onClick={() => formatText("underline")}>
              <u>U</u>
            </button>
          </div>
          <div
            className="transcript"
            contentEditable={true}
            dangerouslySetInnerHTML={{ __html: transcript }}
          ></div>
        </div>
        <button
          onClick={SpeechRecognition.startListening}
          class="text-box-btn btn btn-success"
        >
          Start
        </button>
        <button
          onClick={SpeechRecognition.stopListening}
          class="text-box-btn btn btn-danger"
        >
          Stop
        </button>
        <button onClick={resetTranscript} class="text-box-btn btn btn-danger">
          Reset
        </button>
      </div>
    </>
  );
}
export default Main;
