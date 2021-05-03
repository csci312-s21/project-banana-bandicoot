import { useState } from "react";
import styles from "../styles/Home.module.css";

import ButtonBar from "../components/ButtonBar.js";

export default function Event({ event, joined , joinEvent, leaveEvent}) {

//let numPeople = numJoined;
  
      const [numPeople, setNumPeople ] = useState(event.number_joined);


  return (
          <div className={styles.list}>
            <ul>
              <li> 
                <div>
                  <h4> {event.title} </h4>
                  <h5> {event.location} || {event.date} @ {event.time} </h5>
                  <h5> Spots: {numPeople} / {event.max_number} </h5>
                  <h6> Joined= {joined? "true" : "false"} </h6>

                  <ButtonBar numPeople = {numPeople} setNumPeople = {setNumPeople} maxPeople = {event.max_number} joined = {joined} joinEvent = {joinEvent} leaveEvent = {leaveEvent} event = {event}/>

                  <h3 hidden = {numPeople < event.max_number}> Sorry, {event.title} is full! </h3>
                </div> 
              </li>
            </ul>
          </div>
  );

}