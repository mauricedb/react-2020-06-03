import React from "react";
import Greeter from "./Greeter";
import useTimer from "./useTimer";

function Clock() {
  const userName = "Timer";
  const o = React.useMemo(() => ({ firstName: userName }), [userName]);

  const time = useTimer(2500);

  return (
    <div>
      <div>The time is: {time.toLocaleTimeString()}</div>
      <Greeter person={o} />
    </div>
  );
}

export default Clock;
