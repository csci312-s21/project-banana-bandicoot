import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import MyEvents from "../components/MyEvents.js";

import MenuBar from "../components/MenuBar";

import {useSession} from "next-auth/client";



export default function myEvents() {


  const [session] = useSession();
  const [person, setPerson] = useState({});
  const [myJoinedEvents, setMyJoinedEvents] = useState([]);
  const [deleter, setDeleter] = useState();

  //getting user
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
      },[session, deleter]);



  //calls all the events specific to the user 
  useEffect(() => {
    const getData = async () => {
      if(person.joinedEvents){
      const myEventsArray=[]
      for (let i=0;i<((person.joinedEvents).length);i++){
      const response = await fetch(`/api/events/${person.joinedEvents[i]}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
    // this returns a single event we have to push to an array
      const eventsData = await response.json();
      myEventsArray.push(eventsData)
    }

      setMyJoinedEvents(myEventsArray);
      }
    };


          getData();
      }, [person]);

  
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
  
  return (
 <MenuBar person = {person}>

    <div className={styles.welcome}>

      <h1 className={styles.title}>My Events</h1> 

      <MyEvents id = "MyEvents" ourEvents = {myJoinedEvents} myData = {person} joinEvent = {joinEvent} leaveEvent = {leaveEvent} deleteEvent = {deleteEvent} person = {person} /> 

    </div>
  </MenuBar>
    );
}
