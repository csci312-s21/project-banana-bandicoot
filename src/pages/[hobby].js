
import { useState, useEffect } from "react";

import styles from "../styles/Home.module.css";


import Event from "../components/Event.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

import { useRouter } from "next/router";

import {useSession} from "next-auth/client";



export default function Hobby() {
  const router = useRouter();
  const { hobby } = router.query;

  const [session] = useSession();
  const [hobbyObj, setHobbyObj] = useState({});
  const [collection, setCollection] = useState([]);
  const [page, setPage] = useState();
  const [person, setPerson] = useState({joinedEvents: {}});
  const [deleter, setDeleter] = useState();

  useEffect(() => {
    const getPerson = async () => {
      if(session) {
      const response = await fetch(`/api/profile/${session.user.id}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const foundPerson = await response.json();

      setPerson(foundPerson);
      }

    }

      getPerson();
      }, [session]);

  useEffect(() => {

    const getHobby = async (useHobby) => {
      const results = await fetch(`/api/groups/${useHobby}`);

      if (!results.ok) {
        throw new Error(results.statusText);
      }

      const hobbyFetch = await results.json();

     
      setHobbyObj(hobbyFetch);

    };

    getHobby(hobby);

  }, [hobby, person, deleter]);


  useEffect(() => {
    const getEvents = async () => {
      if(hobbyObj.events){
      const hobbyEventsArray=[]
      for (let i=0;i<((hobbyObj.events).length);i++){
      const response = await fetch(`/api/events/${hobbyObj.events[i]}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
    // this returns a single event we have to push to an array
      const eventsData = await response.json();
      hobbyEventsArray.push(eventsData)
    }

      setCollection(hobbyEventsArray);
      }
    };


          getEvents();
      }, [hobbyObj]);


   const deleteEvent = async(event) => {
    setDeleter(false);
    if(event){
      //delete event from list of events
      const response = await fetch( `/api/events/${event.id}`,{
      method: "DELETE",
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      await response.json();
      
      setDeleter(true);
    }
  }
   
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

      const updated = await response.json();
    
      setPerson(updated);
     }
    
    setPage();

    };

  
  const joinEvent = async (newEvent)=>{
    const response = await fetch( `/api/profile/join/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(newEvent.id),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();

    setPerson(updated);
    
    };

  const leaveEvent = async (oldEvent)=>{
    
    const response = await fetch( `/api/profile/leave/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(oldEvent.id),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();

    setPerson(updated);
    };

  return (
    <MenuBar person = {person}>

    {(!page)?(


       <div className={styles.welcome}>

        <h1 className={styles.title}>{hobby} Events</h1> 
        <ul className ={styles.eventGrid}>
        {collection.filter(event => event.hobbyID === hobbyObj.id).map(event =>(
            <Event key={event} event = {event} joinEvent = {joinEvent} leaveEvent = {leaveEvent} joined = {person.joinedEvents.includes(event.id)} deleteEvent = {deleteEvent} owner = {(event.creator===person.id)}/>
        ))}</ul>
        <br/>
        <input className={styles.addButton} type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </div>
      ):( <div className={styles.mainContainer}>
        <AddEvent complete = {addEvent} currHobby = {hobbyObj.id} person = {person}/>
      </div>)}

    
      
    </MenuBar>
  );
  } 
