
import Event from "../components/Event.js";

import styles from "../styles/Home.module.css";

import PropTypes from "prop-types"

export default function MyEvent({ ourEvents, joinEvent, leaveEvent, deleteEvent, person}) {

return(
  <ul className = {styles.eventGrid}>
  {ourEvents.map(event => (
      <Event key={event} event = {event} joined= {1===1} joinEvent = {joinEvent} leaveEvent = {leaveEvent}  deleteEvent = {deleteEvent} owner = {(event.creator===person.id)}/>
  ))}
  </ul>
);


}


MyEvent.propTypes = {
  ourEvents: PropTypes.array,
  joinEvent: PropTypes.func.isRequired,
  leaveEvent: PropTypes.func.isRequired
};