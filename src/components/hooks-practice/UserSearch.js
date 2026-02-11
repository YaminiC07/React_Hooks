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
    <div>
      <input
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.map((user) => (
        <div key={user.id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
          <p>{user.company.name}</p>
          <p>{user.address.city}</p>
        </div>
      ))}
    </div>
  );
}

export default UserSearch;
