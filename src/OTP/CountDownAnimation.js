import { forwardRef, useEffect, useState, useImperativeHandle } from "react";

const CountDownAnimation = forwardRef((props, ref) => {
  const TIME_LIMIT = 20;
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const FULL_DASH_ARRAY = 283;
  const WARNING_THRESHOLD = 10;
  const ALERT_THRESHOLD = 5;

  const COLOR_CODES = {
    info: {
      color: "green",
    },
    warning: {
      color: "orange",
      threshold: WARNING_THRESHOLD,
    },
    alert: {
      color: "red",
      threshold: ALERT_THRESHOLD,
    },
  };

  let remainingPathColor = COLOR_CODES.info.color;

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return `${minutes}:${seconds}`;
  };

  const setRemainingPathColor = (timeLeft) => {
    const { alert, warning, info } = COLOR_CODES;
    if (timeLeft <= alert.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(warning.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(alert.color);
    } else if (timeLeft <= warning.threshold) {
      document
        .getElementById("base-timer-path-remaining")
        .classList.remove(info.color);
      document
        .getElementById("base-timer-path-remaining")
        .classList.add(warning.color);
    }
  };

  const calculateTimeFraction = () => {
    const rawTimeFraction = (timeLeft - 1) / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  };

  const setCircleDasharray = () => {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      props.setIsDisableBtn(true);
      return;
    }
    const timer = setInterval(() => {
      const currentTime = timeLeft - 1;
      setTimeLeft(currentTime);
      setCircleDasharray();
      setRemainingPathColor(currentTime);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  // 
  useImperativeHandle(ref, () => ({
    restTimer() {
      const { alert, warning, info } = COLOR_CODES;

      document
        .querySelector("#base-timer-path-remaining")
        .classList.remove(alert.color);

      document
        .querySelector("#base-timer-path-remaining")
        .classList.remove(warning.color);

      document
        .querySelector("#base-timer-path-remaining")
        .classList.add(info.color);

      setTimeLeft(TIME_LIMIT);
      props.setIsDisableBtn(false);
    },
  }));

  return (
    <div className="count-down-animation-container">
      <div className="base-timer">
       
        <span id="base-timer-label" className="base-timer__label">
          {formatTime(timeLeft)}
        </span>
      </div>
    </div>
  );
});

export default CountDownAnimation;
