
import styles from "../styles/AddEvent.module.css";

import collection from "../../data/hobbies.json";
 
import { useState } from "react";

import PropTypes from "prop-types"
 
export default function AddHobby({addHobby}){
 
  const [hobbyInput, setHobbyInput] = useState("");
  const [newHobbyInput, setNewHobbyInput] = useState("");
  const newHobby = {name: hobbyInput};

  
  const hobbyList = collection.map((hobby)=> { //list of sections
    return <option value = {hobby.name} key ={hobby.name}>{hobby.name}</option>;
   }); 
   //initiate helper to perform callbacks on click
 
 return(
   <div className={styles.add}>
   <div className={styles.text}>
  
     <h1 className={styles.p}> Add Hobby </h1>
    
     <h3>Add from existing hobbies:  
       </h3>   

      <select name = "hobbies" id = "hobbies" onChange = {(event) => setHobbyInput(event.target.value)}>{hobbyList}<option value="starter" selected>Select Hobby </option></select>

      <input type = "button" id = "oldHobbyButton" name = "oldHobbyButton" onClick = {() => addHobby(hobbyInput)} value = "Add Hobby"/>

    <div>
    <h3>Create a new hobby:  
       </h3>   
    

     <input type="text" id="newHobby" name="newHobby" placeholder = "New Hobby" value = {newHobbyInput} onChange = {(event) => setNewHobbyInput(event.target.value)} />


     <input type = "button" disabled = {newHobby === null} onClick = {() => addHobby(newHobbyInput.charAt(0).toUpperCase() + newHobbyInput.slice(1))} value = "Save"/>

  
 
     <input type = "button" id = "Cancel"  onClick = {() => addHobby()} value = "Cancel"/>
    
     </div>
     </div>
     </div>
 );
}
 
AddHobby.propTypes = {
  addHobby: PropTypes.func.isRequired
};