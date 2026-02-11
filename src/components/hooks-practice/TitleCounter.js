import { useState, useEffect } from "react";

function TitleCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}

export default TitleCounter;
