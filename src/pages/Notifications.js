import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import MenuBar from "../components/MenuBar";

import Notify from "../components/notifications";

import {useSession} from "next-auth/client"


export default function Notifications() {

  const [person, setPerson] = useState({});
  const [session] = useSession();
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
      },[session, deleter]);
  

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
 <MenuBar person = {person} >

    <div className={styles.welcome}>

      <h1 className={styles.title}>Notifications</h1> 


       <h2 className={styles.title}>Newest Events:</h2> 
      <Notify person = {person} joinEvent = {joinEvent} leaveEvent = {leaveEvent}  deleteEvent = {deleteEvent}/> 


    </div>
  </MenuBar>
    );
}
