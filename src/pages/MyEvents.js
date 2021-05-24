import styles from "../styles/Home.module.css";

import { useState, useEffect } from "react";

import {useSession} from "next-auth/client"

import MyEvents from "../components/MyEvents.js";

//import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

//import profileData from "../../data/profile.json";

export default function myEvents() {

  // const initialUser = profileData.find(user => (user.name === "Samantha Enriquez"));

  
  const [session] = useSession(); //session
  //console.log("session ", session)
  //console.log("session ID", session.user.id)
  const [person, setPerson] = useState({"name":"kpease","email":"kpease@middlebury.edu","hometown":"Boston","birthday":"2000-02-12","major":"Computer Science and Psychology","year":"2022","hobby":["Basketball","Chess"],"bio":"hello!","username":"katelyn-pease","password":"thisismypassword!","joinedEvents":[1,2],"id":1});

 
  // const [myUsersData] = useState(initialUser);

  const [myJoinedEvents, setMyJoinedEvents] = useState([]);


  
  //getting user
  useEffect(() => {
    const getPerson = async () => {
      if(session) {
      const response = await fetch(`/api/profile/${session.name}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const foundPeople = await response.json();

      setPerson(foundPeople);
      //setJoinedEventIDs(person.joinedEvents) //not sure if i need this
      }

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
    }

      setMyJoinedEvents(myEventsArray);
    };

      getData();
      },[person.joinedEvents]);

  let newUser;
   let updatedEvent;

  
   const joinEvent = async (newEvent)=>{
    newUser = {...person, joinedEvents:[...person.joinedEvents, newEvent.id]}
    const response = await fetch( `/api/profile/${person.name}`,{
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
    
    const response = await fetch( `/api/profile/${person.name}`,{
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
  



    // allHobbies = {hobbies} 
    return (

      <MenuBar person={person}>

        <div className={styles.welcome}>
          <h1 className={styles.title}>My Events</h1>
           <MyEvents id="MyEvents" ourEvents={myJoinedEvents} myData={person} joinEvent={joinEvent} leaveEvent={leaveEvent} />

        </div>
      </MenuBar>
    );

  }
