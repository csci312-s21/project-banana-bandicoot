import LoginPage from "../components/LoginPage.js";

import { useState } from "react";

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

    //If the user doesn't already have this hobby, add it to their list
    if(!user.hobby.includes(newHobby)){
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
    }
    //Get list of ALL hobbies
    const response = await fetch(`/api/groups`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const allHobbiesObject = await response.json(); //Includes members, need to extract just hobbies
    const allHobbies = allHobbiesObject.map(hobbyObject => hobbyObject.hobby)
    //If newHobby isn't in allHobbies, add it
    if(!allHobbies.includes(newHobby)){
      const addedHobby = {hobby: newHobby, members: {"FIX"}} //Add the specific user's id?
      const response = await fetch( `/api/groups`,{
      method: "POST",
      body:  JSON.stringify(addedHobby),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const updated = await response.json();
    }
    };
   
   


if(session){

  return(
  <div>
    {(page === "prof")?<MenuBar person = {person}>
 <ProfilePage person= {person} setPage = {setPage} /></MenuBar>:<AddHobby addHobby={setHobbies}/>}
</div>
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





  
