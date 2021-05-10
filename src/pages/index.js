
import { useState } from "react";

import LoginPage from "../components/LoginPage.js";

import styles from "../styles/Home.module.css";


export default function Home() {

   
  const [currentPage, setPage] = useState("login");
  const [person, setPerson] = useState(0);




   return (
      <div>
      <LoginPage setPage = {setPage} getPerson = {setPerson} />
      </div>
    );
  
  
  } 
