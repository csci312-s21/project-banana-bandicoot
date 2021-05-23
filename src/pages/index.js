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
   if(newHobby){
     
  //   //Get list of ALL hobbies
     const response = await fetch(`/api/groups`);
     if (!response.ok) {
       throw new Error(response.statusText);
     }

     const allHobbiesObject = await response.json(); ///Includes members, need to extract just hobby names
     const allHobbies = allHobbiesObject.map(hobbyObject => hobbyObject.name)
    //If newHobby isn't in allHobbies, add it
    if(!allHobbies.includes(newHobby)){
      const addedHobby = {name: newHobby, members: []} //Add the specific user's id?
      const response2 = await fetch( `/api/groups`,{
      method: "POST",
      body:  JSON.stringify(addedHobby),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response2.ok) {
        throw new Error(response2.statusText);
      }

      await response2.json();
    }
   
    //If the user doesn't already have this hobby, add it to their list
    if(!person.hobby.includes(newHobby)){
      //Add hobby to the user's list
      newUser = {...person, hobby:[...person.hobby, newHobby]}
      const response3 = await fetch( `/api/profile/${newUser.id}`,{
      method: "PUT",
      body:  JSON.stringify(newUser),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response3.ok) {
        throw new Error(response3.statusText);
      }

      const updated = await response3.json();

      setPerson(updated);

      //Add person to hobby's list
      
      const response2 = await fetch( `/api/groups/${newHobby}`,{
      method: "PUT",
      body:  JSON.stringify(person.id),
      headers: new Headers({ "Content-type": "application/json" }),
          });
      if (!response2.ok) {
        throw new Error(response2.statusText);
      }

      await response2.json();
      
    }
   }
  
   setPage("prof");
    
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





  
