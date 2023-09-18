import { useState } from 'react';


export default function SignUpForm({setToken}) {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', {
              method: "POST",
              headers: {
                "Content-Type": "application/json", // Specify JSON content type
              },
              body: JSON.stringify({ username, password: "test" }), // Use the body property to send data
            });
      
            if (!response.ok) {
              // Check if the response is not OK (e.g., status code 4xx or 5xx)
              throw new Error('Failed to sign up');
            }

            const data = await response.json();
            const { token } = data;
            setToken(token); // Update the token state
          } catch (err) {
            setError(err.message);
          }
        }
      
    return (
    <>
    <h2>Sign Up!</h2>
    {error && <p>{error}</p>}
<form onSubmit={handleSubmit}>
  <label>
    Username: <input 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} />
  </label>
  <label>
    Password: <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}/>
  </label>
  <button>Submit</button>
</form>
</>
    );

  }