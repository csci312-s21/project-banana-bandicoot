
import {
  signOut,
} from "next-auth/client"

import styles from "../styles/MenuBar.module.css";


import { useState, useEffect } from "react";

import MenuItem from "../components/MenuItem";



//children prop was deleted because it wasn't being used anywhere
export default function MenuBar() {
  const [visible, toggleMenu] = useState(false);
  const [events, setEvents] = useState([]);

  //calls all the events
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/events`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const eventsData = await response.json();


      setEvents(eventsData);
    };

    getData();
  }, [events]);

  const hobbies = [];
    events.forEach((event)=> //determine sections
    {if(hobbies.includes(event.hobby)){
    return null;
    }
    else{
    hobbies.push(event.hobby);
    }
    }
    );
    hobbies.sort(); 

  const [hobbies, updateHobbies] = useState();


  const icon = (
    <span onClick={() => { toggleMenu(!visible) }} className={styles.menuHeaderI}>
      {"☰"}</span>
  );

<<<<<<< HEAD
  const menu = (
    <div className={styles.container}>
      &emsp;&emsp;<div className={styles.heading} />
      <br />
      <button className={styles.button1}>+Add Event</button>
      <ul className={styles.ul}>

        <MenuItem title={"Profile"} icon={"fa fa-user-circle"} />
=======

  useEffect(()=>{
  //updates groups when menu is rendered

    const getHobbies = async () => {
    const response = await fetch( `/api/profile/${person.id}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const newPerson = await response.json();
    updateHobbies(newPerson.hobby);

};

getHobbies();

 
  }, [person]);




  const menu =( 
    <div className={styles.container}>
    &emsp;&emsp;<div className={styles.heading} />
    <br/>

    <button className = {styles.button1} onClick={signOut}>Sign Out</button>
    <ul className={styles.ul}>
>>>>>>> 60f109d89c78ab2e355520ad8a10c6af2b09e0af

        <MenuItem title={"Notifications"} icon={"fa fa-bell"} />

        <MenuItem title={"Groups"} items={hobbies} icon={"fa fa-users"} />

<<<<<<< HEAD
        <MenuItem title={"MyEvents"} icon={"fa fa-calendar"} />
=======
      <MenuItem title = {"Groups"} items = {hobbies} icon = {"fa fa-users"}/> 
    
      <MenuItem title = {"MyEvents"} icon = {"fa fa-calendar"}/>
>>>>>>> 60f109d89c78ab2e355520ad8a10c6af2b09e0af

      </ul>
    </div>);


  return (

    <div className={styles.mainContainer}>
      <div className={styles.sideBar}>
        {menu}
      </div>
      <div className={styles.icon}>
        {icon}
      </div>
      {visible ? menu : null}
      <div className={styles.welcome}>
    {/*children */}
      </div>
      <footer className={styles.footer}> A CS 312 Project </footer>
    </div>

  );

}