import styles from "../styles/Home.module.css";


import { useState } from "react";

import MyEvents from "../components/MyEvents.js";

import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

import profileData from "../../data/profile.json";



export default function myEvents() {
  

  const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));

  const [myUsersData] = useState(initialUser);
  const [collection] = useState(data);
  const [joinedEventsIDs, setJoinedEventIDs] = useState(myUsersData.joinedEvents);
 
  // used for myEvents list

  const [myJoinedEvents, setMyJoinedEvents] = useState(
    collection.filter(event => (myUsersData.joinedEvents).includes(event.id))
  );

// useEffect(() => {
//   const getData = async () => {
//     const response = await fetch(`${data}/api/events`);
  
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const eventsData = await response.json();

//     setMyJoinedEvents(eventsData);
//   };

//   getData();
//   },[]);

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
 <MenuBar person = {myUsersData}>

    <div className={styles.welcome}>

      <h1 className={styles.title}>My Events</h1> 

      <MyEvents id = "MyEvents" ourEvents = {myJoinedEvents} myData = {myUsersData} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/> 

    </div>
  </MenuBar>
    );
}
