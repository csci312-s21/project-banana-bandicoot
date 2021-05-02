
import styles from "../styles/Home.module.css";

export default function ButtonBar({numPeople, setNumPeople, maxPeople, joined, joinEvent, event}){

//NEED TO SEND A SETTER HERE TO SET EVENT TO JOINED

  function complete(){
    setNumPeople(numPeople + 1);
    joinEvent(event);
  }

  return(
    <div>
    <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => complete()} hidden = {joined} disabled = {joined}/>

    <input className = {styles.button} type = "button" id = "leavebutton" value = "Leave" onClick = {() => setNumPeople(numPeople - 1)} hidden = {!joined} disabled = {!joined}/>
    </div>
  );

}