
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


  const user = profileData.find(curr => (curr.name === "senriquez"));

  const [collection] = useState(data);
  const [page, setPage] = useState();
  const [person, setPerson] = useState(user);




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


   let newUser;
   let updatedEvent;
   const addEvent = async (event)=>{
    const response = await fetch( `/api/events`,{
    method: "POST",
    body:  JSON.stringify(event),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    await response.json();

    newUser = {...person, joinedEvents:[...person.joinedEvents, event.id]}
    const response2 = await fetch( `/api/profile/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(newUser),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response2.ok) {
      throw new Error(response2.statusText);
    }

    const newPerson = await response2.json();
  
    setPerson(newPerson);
    

    };

  
   const joinEvent = async (newEvent)=>{
    newUser = {...person, joinedEvents:[...person.joinedEvents, newEvent.id]}
    const response = await fetch( `/api/profile/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(newUser),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();
  
    updatedEvent = {...newEvent, participants:[...newEvent.participants, person.id], number_joined:newEvent.number_joined+1}

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
    console.log(oldEvent.id);
    newUser = {...person, joinedEvents:
    (person.joinedEvents.filter(event => event !== oldEvent.id))}
    console.log(newUser);
    
    const response = await fetch( `/api/profile/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(newUser),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();

    updatedEvent = {...oldEvent, participants:oldEvent.participants.filter(part => part!==person.id), number_joined:oldEvent.number_joined-1}
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
        {collection.filter(event => event.hobby === hobby).map(event =>(
            <Event key={event} event = {event} joinEvent = {joinEvent} leaveEvent = {leaveEvent} joined = {person.joinedEvents.includes(event.id)}/>
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
