import styles from "../styles/Home.module.css";


import { useState } from "react";

import MyEvents from "../components/MyEvents.js";

import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

import profileData from "../../data/profile.json";



export default function myEvents() {
  

  const user = profileData.find(curr => (curr.name === "senriquez"));

  const [person, setPerson] = useState(user);
  const [collection] = useState(data);

 
  // used for myEvents list

  const [myJoinedEvents] = useState(
    collection.filter(event => (person.joinedEvents).includes(event.id))
  );

// useEffect(() => {
//   const getData = async () => {
//     const response = await fetch(`${data}/api/events`);
  
//     if (!response.ok) {
//       throw new Error(response.statusText);
//     }

//     const eventsData = await response.json();

//     setMyJoinedEvents(eventsData);
//   };

//   getData();
//   },[]);

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
