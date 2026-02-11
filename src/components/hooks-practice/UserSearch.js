import { useState, useEffect } from "react";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "250px", marginBottom: "20px" }}
      />

      {/* GRID USERS */}
      <div style={styles.grid}>
        {filteredUsers.map((user) => (
          <div key={user.id} style={styles.card}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.company.name}</p>
            <p>{user.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // ✅ 4 columns
    gap: "15px",
  },
  card: {
    border: "1px solid gray",
    padding: "10px",
    borderRadius: "8px",
    boxShadow: "0 0 5px gray",
  },
};

export default UserSearch;
