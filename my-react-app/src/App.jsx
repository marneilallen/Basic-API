import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  // Fetch data when the component loads
  useEffect(() => {
    // We use localhost:5000 because that's where our Node API is running
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Directory</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;