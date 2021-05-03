
import { useState } from "react";

import Head from "next/head";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";


import Event from "../components/Event.js";

import AddEvent from "../components/AddEvent.js";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js"

import LoginPage from "../components/LoginPage.js"


export default function Home() {
  const [visible, toggleMenu] = useState(false);
  const [collection, setCollection] = useState(data);
  const [hobby, setHobby] = useState("");
  const [currentPage, setPage] = useState("login");
  const [person, setPerson] = useState(0);

  const icon = (
    <span onClick={() => {toggleMenu(!visible)}}>
    {visible ? null : "☰"}</span>
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

  if(currentPage === "login") {
   return (
      <div>
      <LoginPage setPage = {setPage} getPerson = {setPerson} />
      </div>
    );
  }
  

  if(currentPage === "main"){
  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
    <div>
    {icon}
    {visible ? <MenuBar visible = {visible} toggleMenu = {toggleMenu} select = {setHobby} allHobbies = {hobbies} setPage = {setPage} />: null }
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
      <div className={styles.welcome}><h2>Welcome to Hobby Buddy!</h2><h5> Lets Go! - DaBaby</h5><h5> The FaceBook of the 21st Century - Mark Zuckerberg</h5><h5> Hobby Buddy to the moon - Elon Musk</h5><h5>Banana Bandicoot is the future of american democracy - Joe Biden</h5></div>}

      </div>
      <footer>A CS 312 Project</footer>
    </div>  
    );
  } else if(currentPage === "add"){
    return(
      <div>
        <AddEvent complete = {complete} currHobby = {hobby}/>
      </div>
      );
  } else if(currentPage === "profile"){
    return (
      <div>
    <ProfilePage setPage = {setPage} person= {person} />
    </div>
    );
  }
  
}
