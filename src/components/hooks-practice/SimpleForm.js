import { useState } from "react";

function SimpleForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({ name, email, message });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
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
          />
          <br /><br />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          />
          <br /><br />

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
          <div>
            <h3>Submitted Data:</h3>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Message: {submittedData.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "black",   // FULL background
    height: "100vh",             // full screen height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    backgroundColor: "white",   // form card
    width: "350px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export default SimpleForm;
