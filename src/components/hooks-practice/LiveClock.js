import { useState, useEffect } from "react";

function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>{time.toLocaleTimeString()}</h2>
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
    fontSize: "25px",
  },
};

export default LiveClock;
