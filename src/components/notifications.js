import styles from "../styles/Home.module.css";


import { useState } from "react";

import MenuItem from "../components/MenuItem";

import Event from "../components/Event";




export default function Notify({events, joinEvent, leaveEvent}){
  const [visible, toggleMenu] = useState(false);

  const currDate = new Date();
  console.log("hello?")
  const newest_events = []
  events.forEach(event => {
    console.log(event)
    const possDate = new Date(event.edited);
    console.log(possDate)
    console.log(currDate)
    const diff =Math.abs(currDate.getHours() - possDate.getHours());
    console.log(diff)
    if(diff<2){
      console.log("YES")
      newest_events.push(event);
    }
  } 
  )
console.log(newest_events);
if(newest_events){
return(

  <ul className = {styles.eventGrid}>
  {newest_events.map((event) => (
    <Event key={event} event = {event} joined="false" joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
  ))}
  </ul>
);
}
else{
  return null;
}

}


