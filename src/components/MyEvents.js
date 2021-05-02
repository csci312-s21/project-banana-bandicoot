
import Event from "../components/Event.js";

export default function MyEvent({ ourEvents, myData, joinEvent}) {

return(
  <ul>
  {ourEvents.map(event => (
      <Event key={event} event = {event} joined = {true} joinEvent = {joinEvent}/>
  ))}
  </ul>
);


}
