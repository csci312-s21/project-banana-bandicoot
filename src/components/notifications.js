
import styles from "../styles/Home.module.css";


import { useState, useEffect } from "react";

import Event from "../components/Event";

import PropTypes from "prop-types"

export default function Notify({ person, joinEvent, leaveEvent }) {
  const [eventsList, setEventsList] = useState([]);


  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch(`/api/events`);


      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const eventObjs = await response.json();
      setEventsList(eventObjs);


    };

    getEvents();



  }, [person]);



  const currDate = new Date();
  const newest_events = []
  const min = 1000 * 60;
  const hours = min * 60;

  if (eventsList && person.hobby) {
    eventsList.forEach(event => {
      if (person.hobby.includes(event.hobby)) {

        const possDate = new Date(event.edited);

        const diff = Math.round((currDate.getTime() - possDate.getTime()) / hours);

        if (diff < 2) {
          newest_events.push(event);
        }
      }
    }

    )
  }
  if (newest_events) {
    return (

      <ul className={styles.eventGrid}>
        {newest_events.map((event) => (
          <Event key={event} event={event} joined="false" joinEvent={joinEvent} leaveEvent={leaveEvent} />
        ))}
      </ul>
    );
  }
  else {
    return null;
  }
// there was a merge conflict here but nothing in HEAD to compare
if(newest_events){
return(

  <ul className = {styles.eventGrid}>
  {newest_events.map((event) => (
    <Event key={event} event = {event} joinEvent = {joinEvent} leaveEvent = {leaveEvent} joined = {person.joinedEvents.includes(event.id)}/>
  ))}
  </ul>
);
}
else{
  return null;
}



}





Notify.propTypes = {
  person: PropTypes.object,
  joinEvent: PropTypes.func.isRequired,
  leaveEvent: PropTypes.func.isRequired
};