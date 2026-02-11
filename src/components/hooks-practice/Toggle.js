import { useState } from "react";

function Toggle(){
    const [visible, setVisible] = useState(true);

    return(
        <div>
        <button onClick={() => setVisible(!visible)}>
            {visible ? "Hide" : "Show"}
        </button>

        {visible && <p>useState is used to store and manage data in a React component, and when the state value changes, the component re-renders to update the UI. useEffect is used to perform side effects such as fetching data from an API, setting timers, or running code when the component loads or updates. useRef is used to store a reference to a DOM element or a value that does not cause re-render when it changes, and it is commonly used for focusing input fields or storing previous values.</p>}
</div>
    );
}

export default Toggle;