import { useState } from "react";
 
import styles from "../styles/ProfilePage.module.css";
 
import MenuBar from "../components/MenuBar";
import AddHobby from "../components/AddHobby.js";
//import skiing from "../components/skiing.jpg"
 
export default function ProfilePage({person, addHobby, hobbyList}){
 
//img
const [page, setPage] = useState();
 
function complete (hobby){
 addHobby(hobby);
 setPage();
}
 
if(!page){
  return (
   //<MenuBar allHobbies = {person.hobby} >
 
   
      <div>
       <div className={styles.left} />
         <div className={styles.center}>
           <h1 className={styles.name}>{person.name}</h1>
           <div className={styles.info}>
           <p><b>Hometown:</b> {person.hometown}</p>
           <p><b>Birthday:</b> {person.birthday}</p>
           <p><b>Major(s):</b> {person.major}</p>
           <p><b>Class of:</b> {person.year}</p>
           <p><b>Favorite Hobbies:</b> {person.hobby}</p>
           <p><b>Bio:</b> {person.bio}</p>
           </div>
         <input className={styles.button} type = "button" id = "addHobbyButton" name = "addHobbyButton" value = "Add Hobby" onClick = {() => setPage("addHobby")}/>
      </div>
   </div> 
 //</div>
     );
} else{
    return (
       <div>
       <AddHobby addHobby={complete} allHobbies = {hobbyList}/>
       </div>
     );
  }
   //</MenuBar>
}
