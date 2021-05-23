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
  console.log("session hello", session)
  const [person, setPerson] = useState({"name":"kpease","email":"kpease@middlebury.edu","hometown":"Boston","birthday":"2000-02-12","major":"Computer Science and Psychology","year":"2022","hobby":["Basketball","Chess"],"bio":"hello!","username":"katelyn-pease","password":"thisismypassword!","joinedEvents":[1,2],"id":1});
 
  // const [myUsersData] = useState(initialUser);
  const [joinedEventsIDs, setJoinedEventIDs] = useState([]);

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
      },[session]);


  //calls all the events specific to the user 
  useEffect(() => {
    const getData = async () => {
      const myEventsArray=[]
      for (let i=0;i<((person.joinedEvents).length);i++){
      const response = await fetch(`/api/events/${person.joinedEvents[i]}`);
      console.log("thisiswhereI fetch each event")

       if (!response.ok) {
      throw new Error(response.statusText);
    }
    // this returns a single event we have to push to an array
      const eventsData = await response.json();
      myEventsArray.push(eventsData)
      console.log("this is a newly fetched event ",eventsData);
    };

      setMyJoinedEvents(myEventsArray);
      setJoinedEventIDs(person.joinedEvents) 
    };

      getData();
      },[person.joinedEvents]);

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
