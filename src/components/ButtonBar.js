
import PropTypes from "prop-types"

import styles from "../styles/Home.module.css";

export default function ButtonBar({maxPeople, joined, joinEvent, leaveEvent, event, switchPages, page, deleteEvent, owner}){


  function complete(){
    joinEvent(event);
  }

  function leave(){
    leaveEvent(event);
  }

  if(!joined){ //if I am not in the event, I will see join button
    if(!page){
      if(owner){
        return(
          <div >
          <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => complete()} hidden = {joined || event.participants.length===maxPeople} disabled = {joined || event.participants.length===maxPeople}/>
          <input className={styles.button} type = "button" id = "membersButton" value = "Participants" onClick={() => switchPages("members")} />
          <input className = {styles.button} type = "button" id = "deleteButton" value = "Delete" onClick = {() => deleteEvent(event)} />
          </div>
        );
        
      } else{
        return(
          <div>
          <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => complete()} hidden = {joined || event.participants.length===maxPeople} disabled = {joined || event.participants.length===maxPeople}/>
          <input className={styles.button} type = "button" id = "membersButton" value = "Participants" onClick={() => switchPages("members")} />
          </div>
        );
      }
      
    } else{
      if(owner){
        return(
          <div>
          <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => complete()} hidden = {joined || event.participants.length===maxPeople} disabled = {joined || event.participants.length===maxPeople}/>
          <input className={styles.button} type = "button" id = "detailsButton" value = "Details" onClick={() => switchPages()} />
          <input className = {styles.button} type = "button" id = "deleteButton" value = "Delete" onClick = {() => deleteEvent(event)} />
          </div>
        );
      }else{
        return(
          <div>
          <input className={styles.button} type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => complete()} hidden = {joined || event.participants.length===maxPeople} disabled = {joined || event.participants.length===maxPeople}/>
          <input className={styles.button} type = "button" id = "detailsButton" value = "Details" onClick={() => switchPages()} />
          </div>
        );
      }
    }
    
  } else{ //If I am in the event, I will only see leave button
    if(!page){
      if(owner){
         return(
            <div>
            <input className = {styles.button} type = "button" id = "leavebutton" value = "Leave" onClick = {() => leave()} hidden = {!joined} disabled = {!joined}/>
            <input className={styles.button} type = "button" id = "membersButton" value = "Participants" onClick={() => switchPages("members")} />
            <input className = {styles.button} type = "button" id = "deleteButton" value = "Delete" onClick = {() => deleteEvent(event)} />
            </div>
          );
      }else{
        return(
          <div>
          <input className = {styles.button} type = "button" id = "leavebutton" value = "Leave" onClick = {() => leave()} hidden = {!joined} disabled = {!joined}/>
          <input className={styles.button} type = "button" id = "membersButton" value = "Participants" onClick={() => switchPages("members")} />
          </div>
        );
      }
     
    } else{
      if(owner){
        return(
        <div>
        <input className = {styles.button} type = "button" id = "leavebutton" value = "Leave" onClick = {() => leave()} hidden = {!joined} disabled = {!joined}/>

        <input className={styles.button} type = "button" id = "detailsButton" value = "Details" onClick={() => switchPages()} />
        <input className = {styles.button} type = "button" id = "deleteButton" value = "Delete" onClick = {() => deleteEvent(event)} />
        </div>
      );
      }else{
        return(
          <div>
          <input className = {styles.button} type = "button" id = "leavebutton" value = "Leave" onClick = {() => leave()} hidden = {!joined} disabled = {!joined}/>

          <input className={styles.button} type = "button" id = "detailsButton" value = "Details" onClick={() => switchPages()} />
          </div>
        );
      }
    }
    
  }
}


ButtonBar.propTypes = {
  joinEvent: PropTypes.func.isRequired,
  leaveEvent: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
  maxPeople: PropTypes.number,
  joined: PropTypes.bool.isRequired
};

