import { useState, useEffect } from "react";

import LoginPage from "../components/LoginPage.js";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";

import AddHobby from "../components/AddHobby.js";


import {
  useSession, signIn
} from "next-auth/client"


export default function Home() {
  const [ session ] = useSession();
  const [person, setPerson] = useState({});
  const [page, setPage] = useState("prof");
  const [allHobbies, setAllHobbies] = useState([]);
 
  useEffect(() => {
    const getPerson = async () => {
      if(session) {
      const response = await fetch(`/api/profile/${session.user.id}`);

       if (!response.ok) {
      throw new Error(response.statusText);
    }
      const foundPerson = await response.json();

      setPerson(foundPerson);
      }

    }

      getPerson();

      },[session, page]);

    


 useEffect(() => {
   const getAllHobbies = async () => {
    const response = await fetch(`/api/groups`);
     if (!response.ok) {
       throw new Error(response.statusText);
     }

     const allHobbiesObject = await response.json(); 
      setAllHobbies(allHobbiesObject);
   }
   getAllHobbies();

 
 }, [page]);



 const setHobbies = async (newHobby)=>{
   if(newHobby){
    const all = allHobbies.map(hobbyObject => hobbyObject.name)

    //If newHobby isn't in allHobbies, add it
    if(!all.includes(newHobby)){
      console.log("here");
      const addedHobby = {name: newHobby, members: [person.id]} //Add the specific user's id
      const response = await fetch( `/api/groups`,{
      method: "POST",
      body:  JSON.stringify(addedHobby),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      await response.json();
    }
   
    //If the user doesn't already have this hobby, add it to their list
    else{

      const hobbyID = await fetch(`/api/groups/${newHobby}`);
     if (!hobbyID.ok) {
       throw new Error(response.statusText);
     }

     const newHobbyObj = await hobbyID.json(); 
     console.log(newHobbyObj);
    //Includes members, need to extract just hobby names
      //Add hobby to the user's list
      const response2 = await fetch( `/api/groups/${newHobbyObj.id}`,{
      method: "PUT",
      body:  JSON.stringify(newHobbyObj),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response2.ok) {
        throw new Error(response2.statusText);
      }

      const updated = await response2.json();

      setPerson(updated);

      
    }
   }
  
   setPage("prof");
    
  };
   
   


if(session){

  return(
  <div>
    {(page === "prof")?<MenuBar person = {person}>
 <ProfilePage person= {person} setPage = {setPage} session = {session}/></MenuBar>:<AddHobby addHobby={setHobbies} allHobbies = {allHobbies}/>}
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
  

  } 





  
