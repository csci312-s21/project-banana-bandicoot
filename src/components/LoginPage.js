
import { useState } from "react";
import profileData from "../../data/profile.json"
import styles from "../styles/LoginPage.module.css";

export default function LoginPage({setPage, getPerson}){

const [password, setPassword] = useState("");
const [username, setUsername] = useState("");

 function toggle(name, pswd){
  for (let i = 0; i < profileData.length; i++) {
  if (profileData[i].password === pswd && profileData[i].username === name){
    const foundPerson=i
    getPerson(foundPerson)
      return (
        setPage("main")
      );
  }
  }
}

  return (
    <div className = {styles.center}>
    <h1>Welcome!</h1>
    <input type="text" onChange= {(event) => setUsername(event.target.value)} placeholder="Username must be set"
    />
    <br />
    <input type="text" onChange= {(event) => setPassword(event.target.value)} placeholder="Password must be set"
    />
    <br />
    
    <button onClick={() => { toggle(username, password)}}> Login </button>
    <p>* username and passwords are case sensitive</p>
    </div>
  );
}
