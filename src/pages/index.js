
import { useState } from "react";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";


import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";

import LoginPage from "../components/LoginPage.js";

import profileData from "../../data/profile.json";

export default function Home() {
  const sampleUsername = "a";

  const initialUser = profileData.find(user => (user.username === sampleUsername));

  const [visible, toggleMenu] = useState(false);
  const [collection, setCollection] = useState(data);
  const [hobby, setHobby] = useState("");
  //const [currId, setId] = useState(5)


  const [myUsersData] = useState(initialUser);
   

  const [currentPage, setPage] = useState("login");
  const [person, setPerson] = useState(0);

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

  const icon = (
    <div className={styles.menuHeaderI} onClick={() => {toggleMenu(!visible)}}>
    {visible ? null : "☰"}</div>
    );



  if(currentPage === "login") {
   return (
      <div>
      <LoginPage setPage = {setPage} getPerson = {setPerson} />
      </div>
    );
  }
  
  
  return (
    <div className={styles.mainContainer}>
    <div>
    <div className = {styles.sideBar}>
    <MenuBar  visible toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies} setPage = {setPage}/>

    </div>
    <div className = {styles.icon}>
    {icon}

    </div>

    {visible ? <MenuBar visible = {visible} toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies} setPage = {setPage} />: null }

    </div>
 <ProfilePage person= {person} /><div className={styles.welcome}>
<footer className = {styles.footer}> A CS 312 Project </footer>
    </div>
</div>


    
      
  );
  } 
