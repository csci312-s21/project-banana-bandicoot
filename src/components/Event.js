import { useState } from "react";
import styles from "../styles/Event.module.css";

import ButtonBar from "../components/ButtonBar.js";

export default function Event({ event, joined , joinEvent, leaveEvent}) {

//let numPeople = numJoined;
  
      const [numPeople, setNumPeople ] = useState(event.number_joined);


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