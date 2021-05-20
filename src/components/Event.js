import { useState } from "react";
import styles from "../styles/Event.module.css";

import ButtonBar from "../components/ButtonBar.js";

export default function Event({ event, joined , joinEvent, leaveEvent}) {

//let numPeople = numJoined;
<<<<<<< HEAD
const [numPeople, setNumPeople ] = useState(event.number_joined);

=======
  
  const [numPeople, setNumPeople ] = useState(event.number_joined);
>>>>>>> 60f109d89c78ab2e355520ad8a10c6af2b09e0af


  return (
          <div className = {styles.event}>
            <ul className = {styles.ul}>
              <li> 

                  <h4> {event.title} </h4>
                  <h5> {event.location} || {event.date} @ {event.time} </h5>
                  <h5> Spots: {numPeople} / {event.max_number} </h5>

             
              </li>
            </ul>
                 {(numPeople === event.max_number)?<p className = {styles.full}>FULL</p>: 
                  <ButtonBar numPeople = {numPeople} setNumPeople = {setNumPeople} maxPeople = {event.max_number} joined = {joined} joinEvent = {joinEvent} leaveEvent = {leaveEvent} event = {event}/>}
          </div>
  );

}