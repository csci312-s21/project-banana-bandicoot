import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import MyEvents from "../components/MyEvents.js";

import MenuBar from "../components/MenuBar";

import {useSession} from "next-auth/client";



export default function myEvents() {


  const [session] = useSession();
  const [person, setPerson] = useState({});
  const [collection] = useState([]);
  // used for myEvents list
  const [myJoinedEvents, setMyJoinedEvents] = useState([]);

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
      },[session]);



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

   let newUser;
   let updatedEvent;

  
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

    <div className={styles.welcome}>

      <h1 className={styles.title}>My Events</h1> 

      <MyEvents id = "MyEvents" ourEvents = {myJoinedEvents} myData = {person} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/> 

    </div>
  </MenuBar>
    );
}
