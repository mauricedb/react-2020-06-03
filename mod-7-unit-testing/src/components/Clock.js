import React from "react";
import useTimer from "./useTimer";

function Clock() {
  const time = useTimer(1000);

  return (
    <div>
      <div>The time is: {time.toLocaleTimeString()}</div>
    </div>
  );
}

export default Clock;
