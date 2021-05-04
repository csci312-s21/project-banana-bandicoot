
import Event from "../components/Event.js";

import styles from "../styles/Home.module.css";

export default function MyEvent({ ourEvents, joinEvent, leaveEvent}) {

return(
  <ul className = {styles.eventGrid}>
  {ourEvents.map(event => (
      <Event key={event} event = {event} joined="true" joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
  ))}
  </ul>
);


}
