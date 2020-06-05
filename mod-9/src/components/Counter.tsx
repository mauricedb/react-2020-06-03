import React from "react";

const Counter: React.FC = () => {
  const [count, setCount] = React.useState<number | null>(null);

  return (
    <div>
      <button onClick={() => setCount((count ?? 0) + 1)}>
        Increment {count}
      </button>
    </div>
  );
};

export default Counter;
