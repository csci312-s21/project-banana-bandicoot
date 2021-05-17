
import styles from "../styles/AddEvent.module.css";

import collection from "../../data/hobbies.json";
 
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 
import { useState } from "react";
 
export default function AddHobby({addHobby, allHobbies}){
 
  const [hobbyInput, setHobbyInput] = useState();
   const [newHobbyInput, setNewHobbyInput] = useState();
  const [dropdownExistingHobby, setDropdownExistingHobby] = useState();
 
  const newHobby = {name: hobbyInput};
  const brandNewHobby = {name: newHobbyInput};
  // const [dropdownOpen, setDropdownOpen] = useState(false);


  const hobbyList = collection.map((hobby)=> { //list of sections
    return <option value = {hobby.name} key ={hobby.name}>{hobby.name}</option>;
   }); //initiate helper to perform callbacks on click
 
 return(
   <div className={styles.add}>
   <div className={styles.text}>
  
     <h1 className={styles.p}> Add Hobby </h1>
    
     <h3>Add from existing hobbies:  
       </h3>   

      <select name = "hobbies" id = "hobbies" onChange = {(event) => setHobbyInput(event.target.value)}>{hobbyList}<option value="starter" selected>Choose Hobby </option></select>

      <input type = "button" id = "oldHobbyButton" name = "oldHobbyButton" onClick = {() => addHobby(newHobby)} value = "Add Hobby"/>

    <div>
    <h3>Create a new hobby:  
       </h3>   
    

     <input type="text" id="newHobby" name="newHobby" placeholder = "New Hobby" value = {newHobbyInput} onChange = {(event) => setNewHobbyInput(event.target.value)} />


     <input type = "button" id = "Save" name = "newHobbyButton" disabled = {newHobby === null} onClick = {() => addHobby(brandNewHobby)} value = "Create New Hobby"/>

    

 
     <input type = "button" id = "Cancel"  onClick = {() => addHobby()} value = "Cancel"/>
    
     </div>
     </div>
     </div>
 );
}
 
