import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import {useSession} from "next-auth/client"

import MyEvents from "../components/MyEvents.js";

//import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

//import profileData from "../../data/profile.json";

export default function myEvents() {

  
  // const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));

  
  const [session, setSession] = useSession(); //session
  console.log("session", session)
  const [person, setPerson] = useState(session.user.name);
 
  // const [myUsersData] = useState(initialUser);
  const [joinedEventsIDs, setJoinedEventIDs] = useState(person.joinedEvents);

  const [myJoinedEvents, setMyJoinedEvents] = useState([]);

  
  //getting user
  useEffect(() => {
    const getPerson = async () => {
      if(session) {
      const response = await fetch(`/api/profile/${session.user.name}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const foundPeople = await response.json();

      setPerson(foundPeople);
      //setJoinedEventIDs(person.joinedEvents) //not sure if i need this
      };

    }

      getPerson();
      },[]);


  //calls all the events specific to the user 
  useEffect(() => {
    const getData = async () => {
      //if(joinedEventsIDs) {
      const response = await fetch(`/api/events`);
      console.log("thisiswhereI fetch events")
       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const eventsData = await response.json();
      
      console.log(eventsData);

      // doing the filter here instead
      const myOwnEvents = eventsData.filter(event => (person.joinedEvents).includes(event.id))

      setMyJoinedEvents(myOwnEvents);
      //}
      
    };

      getData();
      },[joinedEventsIDs]);

    function joinEvent(joinedEvent) {
      const joinedEventsCopy = [...myJoinedEvents, joinedEvent];
      setMyJoinedEvents(joinedEventsCopy);
      const listJoinedEvents = [...joinedEventsIDs, joinedEvent.id];
      setJoinedEventIDs(listJoinedEvents);
    }

    function leaveEvent(leftEvent) {
      const joinedEventsCopy = [...myJoinedEvents];

      for (let i = 0; i < joinedEventsCopy.length; i++) {
        if (joinedEventsCopy[i].id === leftEvent.id) {
          joinedEventsCopy.splice(i, 1);
        }
      }
      setMyJoinedEvents(joinedEventsCopy);

      //Take event ID out of joinedEventsIDs
      const listJoinedEvents = [...joinedEventsIDs];
      for (let i = 0; i < listJoinedEvents.length; i++) {
        if (listJoinedEvents[i] === leftEvent.id) {
          listJoinedEvents.splice(i, 1);
        }
      }
      setJoinedEventIDs(listJoinedEvents);
    }

    // allHobbies = {hobbies} 
    return (

      <MenuBar person={person}>

        <div className={styles.welcome}>

          <h1 className={styles.title}>My Events</h1>

           <MyEvents id="MyEvents" ourEvents={myJoinedEvents} myData={person} joinEvent={joinEvent} leaveEvent={leaveEvent} />

        </div>
      </MenuBar>
    );

  };
