

import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";

//import data from "../../data/seed.json";

import Event from "../components/Event.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

import { useRouter } from "next/router";

//import profileData from "../../data/profile.json";

import {useSession} from "next-auth/client"


export default function Hobby() {
  const router = useRouter();
  const { hobby } = router.query;
  //const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));
  // const [collection, setCollection] = useState(data);
  const [events, setEvents] = useState([])
  const [page, setPage] = useState();
  //getting user info
  const [session] = useSession();
  //initializing person 
  const [person, setPerson] = useState({"name":"kpease","email":"kpease@middlebury.edu","hometown":"Boston","birthday":"2000-02-12","major":"Computer Science and Psychology","year":"2022","hobby":["Basketball","Chess"],"bio":"hello!","username":"katelyn-pease","password":"thisismypassword!","joinedEvents":[1,2],"id":1});
  //getting IDs of joinedEvents 


  // used for myEvents list
  // const [myJoinedEvents, setMyJoinedEvents] = useState(
  //   collection.filter(event => (initialUser.joinedEvents).includes(event.id))
  // );

  //getting Joined Events
  //const [myJoinedEvents, setMyJoinedEvents] = useState([]);


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
      }

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
      },[person]);

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
    }
      //setMyJoinedEvents(myEventsArray);
    };

      getData();
      },[person.joinedEvents]);


  // function addNewEvent (newEvent){
  //     if(newEvent != null){
  //       const coll_copy = [...events, newEvent];
  //       setEvents(coll_copy);
  //  }
  //   setPage("");
  // }

   let newUser;
   let updatedEvent;
   
   const addEvent = async (event)=>{
     if(event){
      const response = await fetch( `/api/events`,{
      method: "POST",
      body:  JSON.stringify(event),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      await response.json();

      newUser = {...person, joinedEvents: [...person.joinedEvents, event.id]}
      const response2 = await fetch( `/api/profile/${person.name}`,{
      method: "PUT",
      body:  JSON.stringify(newUser),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response2.ok) {
        throw new Error(response2.statusText);
      }

      const newPerson = await response2.json();
    
      setPerson(newPerson);
     }
    
    setPage();

    };

  
   const joinEvent = async (newEvent)=>{
    //console.log("before", person.joinedEvents);
    newUser = {...person, joinedEvents: [...person.joinedEvents, newEvent.id]}
    //console.log("added", newEvent.id);
    const response = await fetch( `/api/profile/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(newUser),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();
  
    updatedEvent = {...newEvent, participants: [...newEvent.participants, person.id]}

    const response2 = await fetch( `/api/events/${newEvent.id}`,{
    method: "PUT",
    body:  JSON.stringify(updatedEvent),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response2.ok) {
      throw new Error(response2.statusText);
    }

    await response2.json();

    setPerson(updated);
    
    };

  const leaveEvent = async (oldEvent)=>{
    newUser = {...person, joinedEvents:
    (person.joinedEvents.filter(event => event !== oldEvent.id))}
    const response = await fetch( `/api/profile/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(newUser),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();

    updatedEvent = {...oldEvent, participants : oldEvent.participants.filter(part => (part!==person.id)), number_joined: oldEvent.number_joined-1}
    console.log(updatedEvent);

    const response2 = await fetch( `/api/events/${oldEvent.id}`,{
    method: "PUT",
    body:  JSON.stringify(updatedEvent),
    headers: new Headers({ "Content-type": "application/json" }),
        });

    if (!response2.ok) {
      throw new Error(response2.statusText);
    }

    await response2.json();

    setPerson(updated);
    };

  return (

    <MenuBar person = {person}>

    {(!page)?(


       <div className={styles.welcome}>

        <h1 className={styles.title}>{hobby} Events</h1> 
        <ul className ={styles.eventGrid}>
        {events.filter(event => event.hobby === hobby).map(event =>(
            <Event key={event.id} event = {event} joined = {person.joinedEvents.includes(event.id)} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/>

        // {collection.filter(event => event.hobby === hobby).map(event =>(
        //     <Event key={event} event = {event} joinEvent = {joinEvent} leaveEvent = {leaveEvent} joined = {person.joinedEvents.includes(event.id)}/>

        ))}</ul>
        <br/>
        <input className={styles.addButton} type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </div>
      ):( <div className={styles.mainContainer}>
        <AddEvent complete = {addEvent} currHobby = {hobby} person = {person}/>
      </div>)}

    
      
    </MenuBar>
  );
  } 
