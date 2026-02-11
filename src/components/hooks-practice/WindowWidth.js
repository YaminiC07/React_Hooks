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
    <div>
      <h3>Width: {width}px</h3>
      <p>Device: {device}</p>
    </div>
  );
}

export default WindowWidth;
