import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import {useSession} from "next-auth/client"

import MyEvents from "../components/MyEvents.js";

//import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

import profileData from "../../data/profile.json";

export default function myEvents() {

  
  // const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));
  
  const [session, setSession] = useSession();
  console.log("session", session.user);
  const [person, setPerson] = useState([]);
  console.log("PERSON", person);
  // const [myUsersData] = useState(initialUser);
  const [joinedEventsIDs, setJoinedEventIDs] = useState(person.joinedEvents);
  const [myJoinedEvents, setMyJoinedEvents] = useState([{
    "id": 1,
    "hobby": "Chess",
    "title": "Chess Tournament!",
    "date": "5/2",
    "time": "10:45 AM",
    "location": "DANA Auditorium",
    "number_joined": 1,
    "max_number": 12
  }]);
  console.log("joinedEvents",myJoinedEvents)
  // get user

  useEffect(() => {
    const getPerson = async () => {
      const response = await fetch(`/api/profile`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const foundPeople = await response.json();

      // doing the filter here instead
      const foundProfile = foundPeople.find(profile => (profile.name === session.user.name))
      console.log("PERSONfrom fetch",foundProfile)
      setPerson(foundProfile);
    };

      // getPerson();
      },[session]);


  //calls all the events specific to the user 
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/events`);
      console.log("thisiswhereI fetch events")
       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const eventsData = await response.json();
      console.log(eventsData);

      // doing the filter here instead
      if (person !== undefined) {
      const myOwnEvents = eventsData.filter(event => (person.joinedEvents).includes(event.id))
      }
      console.log("this is once filter happens")

      setMyJoinedEvents(myOwnEvents);
    };

      getData();
      },[person, joinedEventsIDs]);

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
