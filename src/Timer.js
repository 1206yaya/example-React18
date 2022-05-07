import "./styles.css";
import { useEffect, useState } from "react";
let countTimerUseEffect = 0;
const Timer = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const reset = () => setTimeLeft(limit);
  const tick = () => setTimeLeft((t) => t - 1);

  useEffect(() => {
    console.log("Timer.useEffect[]", ++countTimerUseEffect);
    // const timerId = setInterval(tick, 1000);
    // return () => {
    //   console.log("Timer.useEffect[] return ", ++countTimerUseEffect);
    //   clearInterval(timerId);
    // };
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (timeLeft === 0) setTimeLeft(limit);
  });

  return (
    <div>
      <p className="number-board">
        <p>time</p>
        <p>{timeLeft}</p>
      </p>
      <div>
        <button color="red" fluid onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>タイマー</h1>
      </header>
      <Timer limit={3} />
    </div>
  );
}
