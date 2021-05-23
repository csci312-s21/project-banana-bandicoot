import styles from "../styles/Home.module.css";


import { useState } from "react";

import MenuBar from "../components/MenuBar";

import Notify from "../components/notifications";

import profileData from "../../data/profile.json";

export default function Notifications() {

  const user = profileData.find(profile => (profile.name === "senriquez"));
  const [person, setPerson] = useState(user);
  
  
  
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
 <MenuBar person = {person} >

    <div className={styles.welcome}>

      <h1 className={styles.title}>Notifications</h1> 


       <h2 className={styles.title}>Newest Events:</h2> 
      <Notify person = {person} joinEvent = {joinEvent} leaveEvent = {leaveEvent}/> 


    </div>
  </MenuBar>
    );
}
