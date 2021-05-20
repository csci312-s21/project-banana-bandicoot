import { useState } from "react";


import LoginPage from "../components/LoginPage.js";

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
  const [person, setPerson] = useState(user);
  const [page, setPage] = useState("prof");
 
  


 let newUser; 


 const setHobbies = async (newHobby)=>{
    newUser = {...user, hobby:[...user.hobby, newHobby]}
    const response = await fetch( `/api/profile/${newUser.id}`,{
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
if(session){

  return(
  <div>
    {(page === "prof")?<MenuBar person = {person}>
 <ProfilePage person= {person} setPage = {setPage} /></MenuBar>:<AddHobby addHobby={setHobbies}/>}
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
  





  
