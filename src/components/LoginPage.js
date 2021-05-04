
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
    <div className={styles.body}>
    <div className={styles.center}>
    <h1 className={styles.welcome}>Welcome!</h1>
    <br/>
      <label>
      <b>Username:     
        </b>    
      </label>
      <br /> 
      <input type="text" onChange= {(event) => setUsername(event.target.value)} placeholder="Username must be set"
    />
    <label>
    <br /> 
      <b>Password:     
        </b>    
      </label>
      <br /> 
    <input type="password" onChange= {(event) => setPassword(event.target.value)} placeholder="Password must be set"
    />
    <br />
    <br />
    <button className={styles.button} onClick={() => { toggle(username, password)}}> Login </button>
    
    <p>* username and passwords are case sensitive</p>
    </div>
    </div>
  );
}
