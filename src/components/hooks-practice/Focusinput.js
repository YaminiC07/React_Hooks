import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} placeholder="Type something..." />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}

export default FocusInput;
