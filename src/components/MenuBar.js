


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


  const icon = (
    <span onClick={() => { toggleMenu(!visible) }} className={styles.menuHeaderI}>
      {"☰"}</span>
  );

  const menu = (
    <div className={styles.container}>
      &emsp;&emsp;<div className={styles.heading} />
      <br />
      <button className={styles.button1}>+Add Event</button>
      <ul className={styles.ul}>

        <MenuItem title={"Profile"} icon={"fa fa-user-circle"} />

        <MenuItem title={"Notifications"} icon={"fa fa-bell"} />

        <MenuItem title={"Groups"} items={hobbies} icon={"fa fa-users"} />

        <MenuItem title={"MyEvents"} icon={"fa fa-calendar"} />

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