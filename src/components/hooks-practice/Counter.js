import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) setCount(count - 1);
  };
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Counter: {count}</h2>

        <button onClick={increase}>+1</button>
        <button onClick={decrease} disabled={count === 0}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "black",  
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",  
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default Counter;
