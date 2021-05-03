
import { useState } from "react";

import Head from "next/head";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";

import Event from "../components/Event.js";

import MyEvents from "../components/MyEvents.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

import userData from "../../data/users.json";

export default function Home() {
  const [visible, toggleMenu] = useState(false);
  const [collection, setCollection] = useState(data);
  const [hobby, setHobby] = useState("");
  const [currentPage, setPage] = useState("main");
  const [currId, setId] = useState(5)

  const sampleUsername = "ChrisRocks123";

  const initialUser = userData.find(user => (user.username === sampleUsername));

  const [myUsersData, setMyUsersData] = useState(initialUser);
   
   //used for join/leave buttons
  const [joinedEventsIDs, setJoinedEventIDs] = useState(myUsersData.joinedEvents);

  // used for myEvents list
  const [myJoinedEvents, setMyJoinedEvents] = useState(
    collection.filter(event => (myUsersData.joinedEvents).includes(event.id))
  );

  const icon = (
    <span onClick={() => {toggleMenu(!visible)}}>
    {visible ? null : "☰"}</span>
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

  if(currentPage === "main"){
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
    <div>
    {icon}
    {visible ? <MenuBar visible = {visible} toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies} />: null }
    </div>
    {hobby? 

    <div>
      <Head>
        <title>{hobby} events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1 className={styles.title}>{hobby} events</h1> 
        <ul>
        {collection.filter(event => event.hobby === hobby).map(event =>(
            <Event key={event} event = {event} joined = {joinedEventsIDs.includes(event.id)} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
        ))}</ul>
        <br/>
        <input className={styles.addButton} type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </main>

      </div>: 
      <div className={styles.welcome}><h2>Welcome to Hobby Buddy!</h2><h5> Lets Go! - DaBaby</h5><h5> The FaceBook of the 21st Century - Mark Zuckerberg</h5><h5> Hobby Buddy to the moon - Elon Musk</h5><h5>Banana Bandicoot is the future of american democracy - Joe Biden</h5>
      <br></br>
      <ul>
          <MyEvents id = "MyEvents" ourEvents = {myJoinedEvents} myData = {myUsersData} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
      </ul>
      
      </div>
    }
      </div>
      <footer>A CS 312 Project</footer>
    </div> 
    );
  } else if(currentPage === "add"){
    return(
      <div>
        <AddEvent complete = {addNewEvent} currHobby = {hobby}/>
      </div>
      );
  }
  
}





/*
For the use state for joined events (takes ids but puts them all together)

users.filter(user => user.username === "ChrisRocks123").map(user => (user.joinedEvents))
*/