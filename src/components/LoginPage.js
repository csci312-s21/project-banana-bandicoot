
import { useState } from "react";
import profileData from "../../data/profile.json"
import styles from "../styles/LoginPage.module.css";

export default function LoginPage({setPage, setPerson}){

const [password, setPassword] = useState("");
const [username, setUsername] = useState("");

 function toggle(username, password){
  //const findPerson=profileData.map((person)=>{
    if (profileData[0].password === password && profileData[0].username === username){
      setPage("main")
      //returnPerson(person)
    }else{
      setPage("login")
    }
  //})
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
