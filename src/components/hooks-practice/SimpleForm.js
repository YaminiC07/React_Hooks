import { useState } from "react";

function SimpleForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submittedData, setSubmittedData] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();

    setSubmittedData({name, email, message});

    setName("");
    setEmail("");
    setMessage("");
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                />
                <br /><br />

                 <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                /><br /><br />

                 <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                /><br /><br />

                <button type="submit">Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h2>Submitted Data: </h2>
                    <p>Name: {submittedData.name}</p>
                    <p>Email: {submittedData.email}</p>
                    <p>Message: {submittedData.message}</p>
                    </div>
            )}
        </div>
    );

}

export default SimpleForm;
