
import { useState } from "react";
import profileData from "../../data/profile.json"
import styles from "../styles/LoginPage.module.css";
import Link from "next/link";

export default function LoginPage({}){

const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
const [person, setPerson] = useState("");

 function toggle(name, pswd){
  for (let i = 0; i < profileData.length; i++) {
  if (profileData[i].password === pswd && profileData[i].username === name){
    setPerson(i)
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
    <button className={styles.button} onClick={() => { toggle(username, password)}}><Link href={`/Profile`}><a>Login</a></Link></button>
    
    <p>* username and passwords are case sensitive</p>
    </div>
    </div>
  );
}
