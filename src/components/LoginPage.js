

import styles from "../styles/LoginPage.module.css";
import Link from "next/link";

export default function LoginPage(){


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
      <input type="text" placeholder="Username "
    />
    <label>
    <br /> 
      <b>Password:     
        </b>    
      </label>
      <br /> 
    <input type="password" placeholder="Password" />
    <br />
    <br />
    <button className={styles.button}><Link href={`/Profile`}><a>Login</a></Link></button>
    
    <p>* username and passwords are case sensitive</p>
    </div>
    </div>
  );
}
