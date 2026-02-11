import { useState } from "react";

function ColorChanger() {
  const [color, setColor] = useState("white");

  return (
    <div style={styles.container}>
      <div style={{ ...styles.box, backgroundColor: color }}>
        <h2>Current Color: {color}</h2>

        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("blue")}>Blue</button>
        <button onClick={() => setColor("green")}>Green</button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("purple")}>Purple</button>
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
    padding: "30px",
    width: "400px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 0 15px gray",
  },
};

export default ColorChanger;
