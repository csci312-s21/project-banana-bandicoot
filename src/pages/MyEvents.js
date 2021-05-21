import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import MyEvents from "../components/MyEvents.js";

//import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

import profileData from "../../data/profile.json";

export default function myEvents() {


  const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));
  //const [person, setPerson] = useState(initialUser);
  const [myUsersData] = useState(initialUser);
  const [joinedEventsIDs, setJoinedEventIDs] = useState(myUsersData.joinedEvents);
  const [myJoinedEvents, setMyJoinedEvents] = useState([]);

  //calls all the events
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/events`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const eventsData = await response.json();

      // doing the filter here instead
      const myOwnEvents = eventsData.filter(event => (myUsersData.joinedEvents).includes(event.id))

      setMyJoinedEvents(myOwnEvents);
    };

      getData();
      },[joinedEventsIDs]);


    console.log("events: ", myJoinedEvents)

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

      <MenuBar person={myUsersData}>

        <div className={styles.welcome}>

          <h1 className={styles.title}>My Events</h1>

           <MyEvents id="MyEvents" ourEvents={myJoinedEvents} myData={myUsersData} joinEvent={joinEvent} leaveEvent={leaveEvent} />

        </div>
      </MenuBar>
    );
  };
