
import PropTypes from "prop-types"

import styles from "../styles/Home.module.css";

export default function ButtonBar({maxPeople, joined, joinEvent, leaveEvent, event}){


  function complete(){
    joinEvent(event);
  }

  function leave(){
    leaveEvent(event);
  }

  if(!joined){ //if I am not in the event, I will see join button
    return(
    <div>
    <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => complete()} hidden = {joined || event.participants.length===maxPeople} disabled = {joined || event.participants.length===maxPeople}/>
    </div>
    );
  } else{ //If I am in the event, I will only see leave button
    return(
      <div>
      <input className = {styles.button} type = "button" id = "leavebutton" value = "Leave" onClick = {() => leave()} hidden = {!joined} disabled = {!joined}/>
      </div>
    );
  }
}


ButtonBar.propTypes = {
  joinEvent: PropTypes.func.isRequired,
  leaveEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  maxPeople: PropTypes.number.isRequired,
  joined: PropTypes.bool.isRequired
};

