
import { useState, useEffect } from 'react';


export default function Authenticate ({token}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (token) {
          authenticateToken(token);
        }
      }, [token]);
    
  async function authenticateToken(token) {
        try {
          const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Authentication failed'); // Customize the error message
          }
    

          const result = await response.json();
          setSuccessMessage(result.message);
          setError(null); // Clear any previous error
        } catch (error) {
          setError(error.message);
          setSuccessMessage(null); // Clear any previous success message
        }
      }

      return (
        <div>
          <h2>Authenticate</h2>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          <button onClick={() => authenticateToken(token)}>Authenticate Token!</button>
        </div>
      );
    }