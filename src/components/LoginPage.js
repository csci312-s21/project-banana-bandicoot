
import { useState } from "react";
import profileData from "../../data/profile.json"
import styles from "../styles/LoginPage.module.css";

export default function LoginPage({setPage, setPerson}){

const [password, setPassword] = useState("");
const [username, setUsername] = useState("");

 function toggle(username, password){
  for (let i = 0; i < profileData.length; i++) {
    console.log(i)
  if (profileData[i].password === password && profileData[i].username === username){
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
    <button onClick={() => { toggle(username, password) }}> Login </button>
    </div>
  );
}
