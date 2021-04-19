
import { useState } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import MenuBar from "../components/MenuBar";

export default function Home() {
  const [visible, toggleMenu] = useState(false);
  const [currThing, setCurrThing] = useState("");

  const icon = (
    <span  onClick={() => {toggleMenu(!visible)}}>
    {visible ? null : "☰"}</span>
  );

  return (
    <div className={styles.mainContainer}>
    <div className={styles.container}>
    <div>
    {icon}
    {visible ? <MenuBar visible = {visible} toggleMenu = {toggleMenu} select = {setCurrThing} />: null }
    </div>
    {currThing? currThing: 
    <div>
      <Head>
        <title>Final Project</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Final Project</h1>
        <p>Hooray, you got the project deployed!</p>
        <p>Now go and give it some content...</p>
      </main>
      </div> }
      </div>
      <footer>A CS 312 Project</footer>
    </div>
  );
}
