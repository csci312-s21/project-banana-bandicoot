
import styles from "../styles/Home.module.css";

export default function ButtonBar({numPeople, setNumPeople, maxPeople, joined, joinEvent, leaveEvent, event}){


  function complete(){
    setNumPeople(numPeople + 1);
    joinEvent(event);
  }

  function leave(){
    setNumPeople(numPeople-1);
    leaveEvent(event);
  }

  if(!joined){ //if I am not in the event, I will see join button
    return(
    <div>
    <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => complete()} hidden = {joined || numPeople===maxPeople} disabled = {joined || numPeople===maxPeople}/>
    </div>
    /*<input className = {styles.button} type = "button" id = "deleteEvent" value = "Delete Event"  disabled = {true} onClick = {() => delete()}*/
    );
  } else{ //If I am in the event, I will only see leave button
    return(
      <div>
      <input className = {styles.button} type = "button" id = "leavebutton" value = "Leave" onClick = {() => leave()} hidden = {!joined} disabled = {!joined}/>
      </div>
    );
  }
}