import { useState } from "react";

import Head from "next/head";

import styles from "../styles/Home.module.css";

import data from "../../data/seed.json";

import Event from "../components/Event.js";

import AddEvent from "../components/AddEvent.js";

export default function Home() {

  const [collection, setCollection] = useState(data);

  const [hobby, setHobby] = useState("chess");
  
  const [currentPage, setPage] = useState("main");

  function complete (newEvent){
      if(newEvent != null){
        const coll_copy = [...collection, newEvent];
        setCollection(coll_copy);
      }
    setPage("main");
  }



  if(currentPage === "main"){
    return (
    <div className={styles.container}>
      <Head>
        <title>{hobby} events</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
        <h1 className="title">{hobby} events</h1>

        <ul>
        {collection.filter(event => event.hobby == hobby).map(event =>(
            <Event title = {event.title} time = {event.time} location = {event.location} numJoined = {event.number_joined} maxNumber = {event.max_number}/>
        ))}
        </ul>
        <br></br>
        <input type = "button" name = "addEvent" id = "addEvent" value = "Add Event" onClick = {() => setPage("add")}/>
      </main>

      <footer>A CS 312 Project</footer>
    </div>  
    );
  } else if(currentPage === "add"){
    return(
      <div>
        <h2>Add Event</h2>
        <AddEvent complete = {complete} currHobby = {hobby}/>
      </div>
      );
  }
  
}
