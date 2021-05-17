import LoginPage from "../components/LoginPage.js";

import { useState } from "react";


import data from "../../data/seed.json";

import allHobbies from "../../data/hobbies.json";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";

import profiles from "../../data/profile.json";

import {
  useSession
} from "next-auth/client"


export default function Home() {
  const [ session ] = useSession();
  const [collection] = useState(data);
  const [person] = useState(0);

  const [hobbyList, setHobbyList] = useState(allHobbies);
 
  const user = profiles.find(profile => (profile.name === "Leili Manafi"));

  const [myHobbies, setMyHobbies] = useState(user.hobby);




  const addHobby = (newHobby) =>
   { 
   if(hobbyList.includes(newHobby)){ //if newHobby isnt in hobby list
   setHobbyList([...hobbyList, newHobby]);
   }
   //const hobbies = [...hobbies, newHobby]; // for the specific profile?
  setMyHobbies([...myHobbies, newHobby.name]);
  return;
 };


  if(session){
    return  (
    
 <MenuBar allHobbies = {myHobbies} >
<ProfilePage person= {person} hobbyList = {hobbyList}  addHobby = {addHobby} />
</MenuBar>);

  }
  else{
   return (
      <div>
      <LoginPage />
      </div>
    );
  }
  

  } 





  
