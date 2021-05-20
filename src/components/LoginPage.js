import {
  signIn 
} from "next-auth/client"

import styles from "../styles/LoginPage.module.css";


export default function LoginPage(){

  return (
    <div className={styles.body}>
    <div className={styles.center}>
    <h1 className={styles.welcome}>Welcome!</h1>
   <br />
    <button className={styles.button} onClick={signIn}>Login</button>
    
    <p>* username and passwords are case sensitive</p>
    </div>
    </div>
  );
}
