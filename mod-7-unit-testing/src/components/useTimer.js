import React from "react";

export default function useTimer(interval) {
  const [time, setTime] = React.useState(new Date(Date.now()));

  React.useEffect(() => {
    const handle = setInterval(() => setTime(new Date(Date.now())), interval);

    return () => clearInterval(handle);
  }, [interval]);

  return time;
}
