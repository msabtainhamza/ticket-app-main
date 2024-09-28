"use client";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgressBar() {
  const percentage = 28;

  return (
    <div className="h-[40px] w-[40px]">
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: `#8c945a`,
          textColor: "#8c945a",
          trailColor: "#101011",
        })}
      />
    </div>
  );
}

export default CircularProgressBar;
