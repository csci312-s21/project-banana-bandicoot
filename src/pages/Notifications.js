import styles from "../styles/Home.module.css";


import { useState } from "react";

import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

import Notify from "../components/notifications";

import profileData from "../../data/profile.json";



export default function notifications() {
  
  const sampleUsername = "a";

  const initialUser = profileData.find(user => (user.username === sampleUsername));
  const [myUsersData] = useState(initialUser);
  const [collection] = useState(data);
  const [joinedEventsIDs, setJoinedEventIDs] = useState(myUsersData.joinedEvents);
  const [myJoinedEvents, setMyJoinedEvents] = useState();

  // used for myEvents list
  

const hobbies = [];
    collection.forEach((event)=> //determine sections
    {if(hobbies.includes(event.hobby)){
    return null;
    }
    else{
    hobbies.push(event.hobby);
    }
    }
    );
    hobbies.sort(); 


  function joinEvent(joinedEvent){
    const joinedEventsCopy =  [...myJoinedEvents, joinedEvent];
    setMyJoinedEvents(joinedEventsCopy);
    const listJoinedEvents = [...joinedEventsIDs, joinedEvent.id];
    setJoinedEventIDs(listJoinedEvents);
  }

  function leaveEvent(leftEvent){
    const joinedEventsCopy = [...myJoinedEvents];
    
    for( let i = 0; i < joinedEventsCopy.length; i++){ 
        if ( joinedEventsCopy[i].id === leftEvent.id) { 
            joinedEventsCopy.splice(i, 1); 
        }
    }
    setMyJoinedEvents(joinedEventsCopy);

    //Take event ID out of joinedEventsIDs
    const listJoinedEvents = [...joinedEventsIDs];
    for( let i = 0; i < listJoinedEvents.length; i++){ 
        if ( listJoinedEvents[i] === leftEvent.id) { 
            listJoinedEvents.splice(i, 1); 
        }
    }
    setJoinedEventIDs(listJoinedEvents);
  }
  
  return (
 <MenuBar allHobbies = {hobbies} >

    <div className={styles.welcome}>

      <h1 className={styles.title}>Notifications</h1> 

      <Notify events = {collection} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/> 

    </div>
  </MenuBar>
    );
}
