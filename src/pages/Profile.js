import { useState } from "react";
 
import profiles from "../../data/profile.json";
 
import data from "../../data/seed.json";
 
import MenuBar from "../components/MenuBar";
 
import ProfilePage from "../components/ProfilePage.js";
 
import allHobbies from "../../data/hobbies.json";
 
export default function Home() {
 
 const [hobbyList, setHobbyList] = useState(allHobbies);
 
 const user = profiles.find(profile => (profile.name === "Leili Manafi"));

 const [myHobbies, setMyHobbies] = useState(user.hobby);
 const [collection] = useState(data);
 
 const [person] = useState(0);
 
const hobbies = [];
 
   collection.forEach((event)=> //determine sections
   {if(hobbies.includes(event.hobby)){
   return null;
   }
   else{
   hobbies.push(event.hobby);
   }
   }
   );
   hobbies.sort();
 
 
 function addHobby(newHobby){
   const hobbyListCopy = [...hobbyList, newHobby]; //if newHobby isnt in hobby list
   setHobbyList(hobbyListCopy);
   //const hobbies = [...hobbies, newHobby]; // for the specific profile?
  const myHobbiesCopy = [...myHobbies, newHobby];
  setMyHobbies(myHobbiesCopy);
 }
 return  (
  
<MenuBar myHobbies = {myHobbies} >
<ProfilePage person= {person} addHobby = {addHobby} hobbyList = {hobbyList}/>
</MenuBar>
);
}
