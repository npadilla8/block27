import { useState, useEffect } from 'react'
import './App.css'
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";

;

 function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log("New token: ", token);
  }, [token]);

  return (
    <>
  
      <Authenticate token={token} setToken={setToken} />
      <SignUpForm token={token} setToken={setToken} />

      
    </>
  );
}


export default App
