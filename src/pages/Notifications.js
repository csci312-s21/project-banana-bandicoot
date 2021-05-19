import styles from "../styles/Home.module.css";


import { useState } from "react";

import MenuBar from "../components/MenuBar";

import Notify from "../components/notifications";

import profileData from "../../data/profile.json";

export default function Notifications() {

  const user = profileData.find(profile => (profile.name === "Samantha Enriquez"));
  const [person, setPerson] = useState(user);
  
  
  
  let newUser;

  const joinEvent = async (newEvent)=>{
    newUser = {...person, joinedEvents:[...person.joinedEvents, newEvent]}
    const response = await fetch( `/api/profile/${person.id}`,{
    method: "PUT",
    body:  JSON.stringify(newUser),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();
  
    setPerson(updated);
    
    };

  const leaveEvent = async (oldEvent)=>{
    console.log(oldEvent);
    newUser = {...person, joinedEvents:[person.joinedEvents.filter(event => event ===oldEvent)]}
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
