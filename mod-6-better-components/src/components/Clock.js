import React from "react";
import Greeter from "./Greeter";

function Clock() {
  const [time, setTime] = React.useState(new Date());

  React.useEffect(() => {
    const handle = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(handle);
  }, []);

  return (
    <div>
      <div>The time is: {time.toLocaleTimeString()}</div>
      {/* <Greeter person={{ firstName: "Timer" }} /> */}
    </div>
  );
}

export default Clock;
