import { useState } from "react";

import styles from "../styles/Event.module.css";

import ButtonBar from "../components/ButtonBar.js";

import PropTypes from "prop-types"

export default function Event({ event, joinEvent, leaveEvent, joined, deleteEvent, owner}) {
  const [page, setPage] = useState();


  if(!page){
    return (
          <div className = {styles.event}>
            <ul className = {styles.ul}>
              <li> 

                  <h4> {event.title} </h4>
                  <h5> {event.location} || {event.date} @ {event.time} </h5>
                  <h5> Spots: {event.participants.length} / {event.maxNum} </h5>

             
              </li>
            </ul>
            <div>
                 {((event.participants.length === event.max_number)&&!joined)?<p className = {styles.full}>FULL</p>: 
                  <ButtonBar maxPeople = {event.max_number} joined = {joined} joinEvent = {joinEvent} leaveEvent = {leaveEvent} event = {event} switchPages = {setPage} page = {page} deleteEvent = {deleteEvent} owner = {owner}/>}
                  </div>
          </div>
  );
  } else{
    return(
      <div className = {styles.event}>
            <h2> Buddies </h2>
            <ul className = {styles.ul}>
              {event.participants.join(", ")
            }
            </ul>
            <div className = {styles.buttonBar}>
                 {((event.participants.length === event.maxNum)&&!joined)?<p className = {styles.full}>FULL</p>: 
                  <ButtonBar maxPeople = {event.maxNum} joined = {joined} joinEvent = {joinEvent} leaveEvent = {leaveEvent} event = {event} switchPages = {setPage} page = {page} deleteEvent={deleteEvent} owner = {owner}/>}
                  </div>
          </div>
    );
  }
  

}


Event.propTypes = {
  joinEvent: PropTypes.func.isRequired,
  leaveEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  joined: PropTypes.bool.isRequired
};