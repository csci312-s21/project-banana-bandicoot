
import { useState, useEffect } from "react";

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


  const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));

  // const [collection, setCollection] = useState(data);
  const [events, setEvents] = useState([])
  const [page, setPage] = useState();

  //used for join/leave buttons
  const [joinedEventsIDs, setJoinedEventIDs] = useState(initialUser.joinedEvents);

  // used for myEvents list
  // const [myJoinedEvents, setMyJoinedEvents] = useState(
  //   collection.filter(event => (initialUser.joinedEvents).includes(event.id))
  // );

  const [myJoinedEvents, setMyJoinedEvents] = useState([]);

  //calls all the events specific to the user 
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/events`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const eventsData = await response.json();

      // doing the filter here instead
      // const myOwnEvents = eventsData.filter(event => (myUsersData.joinedEvents).includes(event.id))

      // setMyJoinedEvents(myOwnEvents);
      setEvents(eventsData)
    };

      getData();
      },[joinedEventsIDs]);

  // Call all the events to substitue collectionn
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/events`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const eventsData = await response.json();

      // doing the filter here instead
      const myOwnEvents = eventsData.filter(event => (initialUser.joinedEvents).includes(event.id))

      setMyJoinedEvents(myOwnEvents);
    };

      getData();
      },[joinedEventsIDs]);


    // console.log("events: ", myJoinedEvents)


    // const hobbies = [];
    // collection.forEach((event)=> //determine sections
    // {if(hobbies.includes(event.hobby)){
    // return null;
    // }
    // else{
    // hobbies.push(event.hobby);
    // }
    // }
    // );
    // hobbies.sort(); 
  
  


  function addNewEvent (newEvent){
      if(newEvent != null){
        const coll_copy = [...events, newEvent];
        setCollection(coll_copy);
      }
    setPage("");
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



    <MenuBar person = {initialUser}>

    {(!page)?(


       <div className={styles.welcome}>

        <h1 className={styles.title}>{hobby} Events</h1> 
        <ul className ={styles.eventGrid}>
        {events.filter(event => event.hobby === hobby).map(event =>(
            <Event key={event.id} event = {event} joined = {joinedEventsIDs.includes(event.id)} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>
        ))}</ul>
        <br/>
        <input className={styles.addButton} type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </div>
      ):( <div className={styles.mainContainer}>
        <AddEvent complete = {addNewEvent} currHobby = {hobby}/>
      </div>)}

    
      
    </MenuBar>
  );
  } 
