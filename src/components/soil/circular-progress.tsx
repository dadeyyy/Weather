'use client'
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const percentage = 66;
  return (
    <div style={{ width: 90, height: 90 }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#0765FF",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
          
        })}
      />
    </div>
  );
};

export default CircularProgress;
