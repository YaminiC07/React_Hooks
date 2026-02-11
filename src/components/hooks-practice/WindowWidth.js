import { useState, useEffect } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let device = "Desktop";
  if (width < 768) device = "Mobile";
  else if (width <= 1024) device = "Tablet";

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h3>Width: {width}px</h3>
        <p>Device: {device}</p>
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
    fontSize: "20px",
  },
};

export default WindowWidth;
