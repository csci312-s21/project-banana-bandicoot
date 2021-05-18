import LoginPage from "../components/LoginPage.js";

import { useState, useEffect } from "react";


import data from "../../data/seed.json";

import allHobbies from "../../data/hobbies.json";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";

import AddHobby from "../components/AddHobby.js";

import profiles from "../../data/profile.json";

import {
  useSession
} from "next-auth/client"


export default function Home() {
  const [ session ] = useSession();
  const user = profiles.find(profile => (profile.name === "Samantha Enriquez"));
  const [collection] = useState(data);
  const [person, setPerson] = useState(user);
  const [page, setPage] = useState("prof");
  const [hobbyList, setHobbyList] = useState(allHobbies);
 
  

  const [myHobbies, setMyHobbies] = useState(user.hobby);

  let newUser; 

  const setHobbies = (newHobby) => {

  
  if(newHobby){
   console.log(newHobby);
   newUser = {...user, hobby:[...user.hobby, newHobby]}
   console.log(newUser);
   setPage("prof");
   console.log("here");
   setProfile(newUser);
   setMyHobbies(user.hobby);

  }

}

 const setProfile = async (newPerson)=>{

    console.log(newPerson);
    const response = await fetch( `/api/profile/${newPerson.id}`,{
    method: "PUT",
    body:  JSON.stringify(newPerson),
    headers: new Headers({ "Content-type": "application/json" }),
        });
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const updated = await response.json();

    setPerson(updated);


    };
   
   


if(session){

  return(
  <MenuBar person = {person}>
    {(page === "prof")?
 <ProfilePage person= {person} hobbyList = {hobbyList} setPage = {setPage} />:<AddHobby addHobby={setHobbies} allHobbies = {hobbyList}/>}
</MenuBar>
  );


//   }
}
  else{
   return (
      <div>
      <LoginPage />
      </div>
    );
  }
  

  } 





  
