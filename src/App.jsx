import "./App.css";
import SurveyContainer from "./container/SurveyContainer";
import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import ConsentPage from "./container/ConsentPage/ConsentPage";
import InfoPage from "./container/InfoPage/InfoPage";

const App = (props) => {
  const [start, setStart] = useState(false);
  const [userId, setUserId] = useState("");
  const [startTime, setStartTime] = useState("");
  const [clickArray, setClickArray] = useState({});
  const [end, setEnd] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [randomNum, setRandomNum] = useState(0);

  useEffect(() => {
    let newUserId = uuidv4();
    setUserId(newUserId);

    const startTime = Date.now();

    setStartTime(startTime);
    window.scrollTo(0, 0);

    const newRandomNum = getRandomInt(1, 3);
    setRandomNum(newRandomNum);
  }, []);

  const toggleEnd = () => {
    setEnd(true);
  };

  const toggleStart = () => {
    setStart(true);
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="app-container">
      <div>
        {submitted === true ? (
          <InfoPage type="B" />
        ) : start === false ? (
          <ConsentPage
            userId={userId}
            startTime={startTime}
            toggleStart={toggleStart}
            randomNum={randomNum}
          />
        ) : end === false ? (
          <SurveyContainer
            all={3}
            active={0}
            userId={userId}
            startTime={startTime}
            clickArray={clickArray}
            toggleEnd={toggleEnd}
            submitData={props.submitData}
            randomNum={randomNum}
          />
        ) : (
          <InfoPage type="A" />
        )}
      </div>
    </div>
  );
};

export default App;
