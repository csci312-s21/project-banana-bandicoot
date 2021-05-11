
import { useState } from "react";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";

import Event from "../components/Event.js";

import MyEvents from "../components/MyEvents.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";

import LoginPage from "../components/LoginPage.js";

import profileData from "../../data/profile.json";

export default function Home() {
  const sampleUsername = "a";

  const initialUser = profileData.find(user => (user.username === sampleUsername));

  const [visible, toggleMenu] = useState(false);
  const [groups, setGroups] = useState(data);
  const [hobby, setHobby] = useState("");
  //const [currId, setId] = useState(5)


  const [myUsersData] = useState(initialUser);
   
   //used for join/leave buttons
  const [joinedEventsIDs, setJoinedEventIDs] = useState(myUsersData.joinedEvents);

  // used for myEvents list
  const [myJoinedEvents, setMyJoinedEvents] = useState(
    groups.filter(event => (myUsersData.joinedEvents).includes(event.id))
  );
  
  const [currentPage, setPage] = useState("login");
  const [person, setPerson] = useState(0);



 

  const icon = (
    <div className={styles.menuHeaderI} onClick={() => {toggleMenu(!visible)}}>
    {visible ? null : "☰"}</div>
    );

  const hobbies = [];
  groups.forEach((event)=> //determine sections
  {if(hobbies.includes(event.hobby)){
    return null;
  }
  else{
    hobbies.push(event.hobby);
  }
  }
  );
  hobbies.sort(); 


  function addNewEvent (newEvent){
      if(newEvent != null){
        const coll_copy = [...groups, newEvent];
        setGroups(coll_copy);
      }
    setPage("main");
  }

  if(currentPage === "login") {
   return (
      <div>
      <LoginPage setPage = {setPage} getPerson = {setPerson} />
      </div>
    );
  }
  
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
    <div className={styles.mainContainer}>
    <div>
    <div className = {styles.sideBar}>
    <MenuBar  visible toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies} setPage = {setPage}/>

    </div>
    <div className = {styles.icon}>
    {icon}

    </div>

    {visible ? <MenuBar visible = {visible} toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies} setPage = {setPage} />: null }

    </div>
    {(currentPage === "Groups")?(


       <div className={styles.welcome}>

        <h1 className={styles.title}>{hobby} Events</h1> 
        <ul className ={styles.eventGrid}>
        {groups.filter(event => event.hobby === hobby).map(event =>(
            <Event key={event} event = {event} joined = {joinedEventsIDs.includes(event.id)} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
        ))}</ul>
        <br/>
        <input className={styles.addButton} type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </div>
      ):((currentPage === "add")? (<div >
        <AddEvent complete = {addNewEvent} currHobby = {hobby}/>
      </div>):((currentPage === "Profile")? <ProfilePage person= {person} />:((currentPage === "Notifications")?<div className={styles.welcome}>

        <h1 className={styles.title}>{hobby} Notifications</h1> </div>:(

      <div className={styles.welcome}>
      <h1 className={styles.title}>My Events</h1> 

      <MyEvents id = "MyEvents" ourEvents = {myJoinedEvents} myData = {myUsersData} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>  
      </div>))))}
    
      <footer className = {styles.footer}> A CS 312 Project </footer>
    </div>
  );
  } 







/*
For the use state for joined events (takes ids but puts them all together)

users.filter(user => user.username === "ChrisRocks123").map(user => (user.joinedEvents))
*/