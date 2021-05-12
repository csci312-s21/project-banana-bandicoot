


import styles from "../styles/MenuBar.module.css";


import { useState } from "react";

import MenuItem from "../components/MenuItem";



export default function MenuBar({allHobbies, children}){
  const [visible, toggleMenu] = useState(false);



  const icon = (
    <span onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeaderI}>
    {"☰"}</span> 
  );

  const menu =( 
    <div className={styles.container}>
    &emsp;&emsp;<div className={styles.heading}></div>
    <br/>
    <button className = {styles.button1}>+Add Event</button>
    <ul className={styles.ul}>

      <MenuItem title = {"Profile"} icon = {"fa fa-user-circle"}/> 

      <MenuItem title = {"Notifications"} icon = {"fa fa-bell"}/>

      <MenuItem title = {"Groups"} items = {allHobbies} icon = {"fa fa-users"}/> 
    
      <MenuItem title = {"MyEvents"} icon = {"fa fa-calendar"}/>

      </ul>
   </div>);


return (

  <div className={styles.mainContainer}>
  <div className = {styles.sideBar}>
    {menu}
   </div>
   <div className = {styles.icon}>
    {icon}
    </div> 
  {visible? menu:null}
  <div className={styles.welcome}>
   {children}
   </div>
   <footer className = {styles.footer}> A CS 312 Project </footer>
   </div>

  );

}