
import { useState } from "react";

import Head from "next/head";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";

import Event from "../components/Event.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

export default function Home() {
  const [visible, toggleMenu] = useState(false);
  const [collection, setCollection] = useState(data);
  const [hobby, setHobby] = useState("");
  const [currentPage, setPage] = useState("main");

  const icon = (
    <div className={styles.menuHeaderI} onClick={() => {toggleMenu(!visible)}}>
    {visible ? null : "☰"}</div>
    );

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


  function complete (newEvent){
      if(newEvent != null){
        const coll_copy = [...collection, newEvent];
        setCollection(coll_copy);
      }
    setPage("main");
  }
  

  if(currentPage === "main"){
  return (
    <div className={styles.mainContainer}>
    <div>
    <div className = {styles.sideBar}>
    <MenuBar  visible = {true} toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies}/>

    </div>
    <div className = {styles.icon}>
    {icon}
    </div>

    <div>

     
     {visible? <MenuBar  visible = {true} toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies}/>: null}

    </div>
    {hobby? 

    <div>
      <Head>
        <title>{hobby} events</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>

        <h1 className={styles.title}>{hobby} events</h1> 
        <ul>
        {collection.filter(event => event.hobby === hobby).map(event =>(
            <Event key={event} title = {event.title} time = {event.time} location = {event.location} numJoined = {event.number_joined} maxNumber = {event.max_number}/>
        ))}</ul>
        <br/>
        <input className={styles.addButton} type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </main>

      </div>: 
      <div className={styles.welcome}>
      <h2>Welcome to Hobby Buddy!</h2><h5> Lets Go! - DaBaby</h5><h5> The FaceBook of the 21st Century - Mark Zuckerberg</h5><h5> Hobby Buddy to the moon - Elon Musk</h5></div>}
      </div>
      <footer className = {styles.footer}>A CS 312 Project</footer>
      
    </div>  
    );
  } else if(currentPage === "add"){
    return(
      <div>
        <AddEvent complete = {complete} currHobby = {hobby}/>
      </div>
      );
  }
}
