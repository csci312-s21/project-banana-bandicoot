import { useState } from "react";
import styles from "../styles/Home.module.css";
export default function Event({ title, time, location , numJoined , maxNumber }) {

//let numPeople = numJoined;

  const [numPeople, setNumPeople ] = useState(numJoined);

//  useEffect(() =>{
//   }, [numPeople]);

return (
        <div className={styles.list}>
          <ul >
            <li> <div>
            <h4> {title} </h4>
            <h5> {location} || {time} </h5>
            <h5> Spots: {numPeople} / {maxNumber} </h5>
            <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => setNumPeople(numPeople + 1)}/>
            
            </div> </li>
          </ul>
        </div>
);
}

