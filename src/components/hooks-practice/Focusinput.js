import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <input ref={inputRef} placeholder="Type something..." />
        <br /><br />
        <button onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>
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

export default FocusInput;
