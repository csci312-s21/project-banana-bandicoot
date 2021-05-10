
import { useState } from "react";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";

import Event from "../components/Event.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

import { useRouter } from "next/router";

import profileData from "../../data/profile.json";


export default function Hobby() {
  const router = useRouter();
  const { hobby } = router.query;

  const sampleUsername = "a";

  const initialUser = profileData.find(user => (user.username === sampleUsername));
  const [visible, toggleMenu] = useState(false);
  const [collection, setCollection] = useState(data);
  const [page, setPage] = useState();
  const [myUsersData] = useState(initialUser);
  //used for join/leave buttons
  const [joinedEventsIDs, setJoinedEventIDs] = useState(myUsersData.joinedEvents);

  // used for myEvents list
  const [myJoinedEvents, setMyJoinedEvents] = useState(
    collection.filter(event => (myUsersData.joinedEvents).includes(event.id))
  );
  console.log(router.query);

  const icon = (
    <div className={styles.menuHeaderI} onClick={() => {toggleMenu(!visible)}}>
    {visible ? null : "☰"}</div>
    );

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


  function addNewEvent (newEvent){
      if(newEvent != null){
        const coll_copy = [...collection, newEvent];
        setCollection(coll_copy);
      }
    setPage("main");
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
    <MenuBar  visible toggleMenu = {toggleMenu}  allHobbies = {hobbies} />

    </div>
    <div className = {styles.icon}>
    {icon}

    </div>

    {visible ? <MenuBar visible = {visible} toggleMenu = {toggleMenu} allHobbies = {hobbies} />: null }

    </div>
    {(!page)?(


       <div className={styles.welcome}>

        <h1 className={styles.title}>{hobby} Events</h1> 
        <ul className ={styles.eventGrid}>
        {collection.filter(event => event.hobby === hobby).map(event =>(
            <Event key={event} event = {event} joined = {joinedEventsIDs.includes(event.id)} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
        ))}</ul>
        <br/>
        <input className={styles.addButton} type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </div>
      ):(<div >
        <AddEvent complete = {addNewEvent} hobby = {hobby}/>
      </div>)}
    
      <footer className = {styles.footer}> A CS 312 Project </footer>
    </div>
  );
  } 







/*
For the use state for joined events (takes ids but puts them all together)

users.filter(user => user.username === "ChrisRocks123").map(user => (user.joinedEvents))
*/