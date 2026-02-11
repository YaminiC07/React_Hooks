import { useState } from "react";

function ColorCharger()
{
    const [color, setColor] = useState("white");

    return(
        <div style={{ backgroundColor: color, padding:"20px"}}>
            <h2>Current Color:{color}</h2>

            <button onClick={() => setColor("red")}>Red</button><br />
            <button onClick={() => setColor("blue")}>Blue</button><br />
            <button onClick={() => setColor("green")}>Green</button><br />
            <button onClick={() => setColor("yellow")}>Yellow</button><br />
            <button onClick={() => setColor("purple")}>Purple</button>
            

        </div>

    );
}

export default ColorCharger;