
import {
  signOut,
  useSession
} from "next-auth/client"

import styles from "../styles/MenuBar.module.css";

import Link from "next/link";

import PropTypes from "prop-types"

import { useState, useEffect } from "react";

import MenuItem from "../components/MenuItem";



export default function MenuBar({person, children}){
  const [visible, toggleMenu] = useState(false);
  const [session] = useSession();
  const [hobbies, updateHobbies] = useState();

  const icon = (
    <span onClick={() => {toggleMenu(!visible)}} className = {styles.menuHeaderI}>
    {"☰"}</span> 
  );

  useEffect(()=>{
  //updates groups when menu is rendered

    const getHobbies = async () => {
    const response = await fetch( `/api/profile/${session.user.id}`);

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

    <button className = {styles.button1} onClick={signOut}><Link href={`/`}><a>Sign Out</a></Link></button>
    <ul className={styles.ul}>

      <MenuItem title = {"Profile"} icon = {"fa fa-user-circle"}/> 

      <MenuItem title = {"Notifications"} icon = {"fa fa-bell"}/>

      <MenuItem title = {"Groups"} items = {hobbies} icon = {"fa fa-users"}/> 
    
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
   <footer className = {styles.footer}> </footer>
   </div>

  );

}




MenuBar.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.number,
  })
};
