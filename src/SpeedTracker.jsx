import { useEffect } from "react";
import { useState } from "react";
import "./component/style.css";

function SpeedTracker() {
  const targeSentence =
    "Programming is the process of designing, writing, testing, and maintaining code to create software, automate tasks, and solve complex problems.";

  const [typedText, setTypedText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(null);

  //handeling the Change user le input gareko
  const handelInputChange = (e) => {
    const text = e.target.value;
    setTypedText(text);

    //Adding the logic here!
    //For the timer to Start
    if (text.length === 1 && startTime === null) {
      setStartTime(Date.now());
    }

    //for timer to Stop
    if (text === targeSentence) {
      setEndTime(Date.now());
    }
  };

  // Calculate typing speed when typing ends
  useEffect(() => {
    if (startTime && endTime) {
      const timeTaken = (endTime - startTime) / 1000; // Time in seconds
      setTypingSpeed((typedText.length / timeTaken).toFixed(2)); // Characters per second
    }
  }, [endTime]); // Runs when `endTime` changes

//handeling the Reset Button
const handelResetButton=()=>{
    setTypedText("");
    setStartTime(null);
    setEndTime(null);
    setTypingSpeed(null);

}

  return (
    <div>
      <h1 >Speed Tracker </h1>
      {typingSpeed && (
        <p>
          <strong>Typing Speed:</strong> {typingSpeed} characters per second
        </p>
      )}
      <p>{targeSentence}</p>
      <input style={{width: '100%', height: '40px'}}
        type="text"
        placeholder="Start Typing here....."
        value={typedText}
        onChange={handelInputChange}
      />
      <button style={{backgroundColor:"red", margin:"30px"}} onClick={handelResetButton}>Reset</button>
    </div>
  );
}
export default SpeedTracker;
