


import styles from "../styles/Home.module.css";


import { useState } from "react";

import MenuItem from "../components/MenuItem";

import Event from "../components/Event";




export default function Notify({events, joinEvent, leaveEvent}){
  const [visible, toggleMenu] = useState(false);

  const currDate = new Date();
  console.log("hello?")
  const newest_events = events.map(event => {
    console.log("SAD")
    let possDate = new Date(event.edited);
    console.log(possDate)
    console.log(currDate)
    let diff =Math.abs(currDate.getHours() - possDate.getHours());
    console.log(diff)
    if(diff<2){
      console.log("YES")
      return(event);

    }
    else{
      return null;
    }

console.log(event)
  }
      
  )

  
return(
  <ul className = {styles.eventGrid}>
  {newest_events.map((event) => (
    
      <Event key={event} event = {event} joined="false" joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
  ))}
  </ul>
);

}


