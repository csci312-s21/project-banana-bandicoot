import { useState, useEffect } from "react";


import LoginPage from "../components/LoginPage.js";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";

import AddHobby from "../components/AddHobby.js";

import profiles from "../../data/profile.json";

import {useSession} from "next-auth/client"


export default function Home() {
  const [session, setSession] = useSession();
  console.log("session in index", session);
  //const user = profiles.find(profile => (profile.name === "senriquez"));
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState("prof");

  useEffect(() => {
    const getPerson = async () => {
      if(session) {
      const response = await fetch(`/api/profile/${session.user.name}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const foundPeople = await response.json();

      // doing the filter here instead
      //const foundProfile = foundPeople.find(profile => //(profile.name === session.user.name))
      //console.log("PERSONfrom fetch",foundProfile)
      setPerson(foundPeople);
      console.log("this person", person)
      };

    }

      getPerson();

      },[session]);
    

 let newUser; 


 const setHobbies = async (newHobby)=>{
    newUser = {...person, hobby:[...person.hobby, newHobby]}
    const response = await fetch( `/api/profile/${person.name}`,{
    method: "PUT",
    body:  JSON.stringify(newUser),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();
    
    setPerson(updated);
    setPage("prof");

    };
   
   

console.log(session);

if (session) {
  return(
  <div>
    {(page === "prof")?<MenuBar person = {person}>
 <ProfilePage session = {session} person= {person} setPage = {setPage} /></MenuBar>:<AddHobby addHobby={setHobbies}/>}
</div>
  );
}


  else{
   return (
      <div>
      <LoginPage />
      </div>
    );
  }
  

  }; 
  





  
