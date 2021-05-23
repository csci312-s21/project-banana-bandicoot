
import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";

import Event from "../components/Event.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

import { useRouter } from "next/router";

import profileData from "../../data/profile.json";

import {useSession} from "next-auth/client"


export default function Hobby() {
  const router = useRouter();
  const { hobby } = router.query;
  //const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));
  // const [collection, setCollection] = useState(data);
  const [events, setEvents] = useState([])
  const [page, setPage] = useState();
  //getting user info
  const [session, setSession] = useSession();
  //initializing person 
  const [person, setPerson] = useState(session.user.name);
  //getting IDs of joinedEvents 
  const [joinedEventsIDs, setJoinedEventIDs] = useState([]);

  // used for myEvents list
  // const [myJoinedEvents, setMyJoinedEvents] = useState(
  //   collection.filter(event => (initialUser.joinedEvents).includes(event.id))
  // );

  //getting Joined Events
  const [myJoinedEvents, setMyJoinedEvents] = useState([]);


  //getting the user if session!
  useEffect(() => {
    const getPerson = async () => {
      if(session) {
      const response = await fetch(`/api/profile/${session.user.name}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const foundPeople = await response.json();

      setPerson(foundPeople);
      //setJoinedEventIDs(person.joinedEvents) //should I do this?
      console.log("Person after init", person);
      };

    }

      getPerson();
      },[]);



  //calls all the events to replace collection
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
      },[person, joinedEventsIDs]);

  // Call all the events specific to the user 
  //calls all the events specific to the user 
  useEffect(() => {
    const getData = async () => {
      const myEventsArray=[]
      for (let i=0;i<((person.joinedEvents).length);i++){
      const response = await fetch(`/api/events/${person.joinedEvents[i]}`);
      console.log("thisiswhereI fetch each event")

       if (!response.ok) {
      throw new Error(response.statusText);
    }
    // this returns a single event we have to push to an array
      const eventsData = await response.json();
      myEventsArray.push(eventsData)
      console.log("this is a newly fetched event ",eventsData);
    };
      setMyJoinedEvents(myEventsArray);
    };

      getData();
      },[person.joinedEvents]);

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

    <MenuBar person = {person}>

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
