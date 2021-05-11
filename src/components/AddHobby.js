import styles from "../styles/AddEvent.module.css";


import { useState } from "react";

export default function AddEvent({addHobby}){

  const [newHobby, setnewHobby] = useState();

  const [dropdownExistingHobby, setDropdownExistingHobby] = useState();
  //setId(currId + 1);

  const newHobby = {name: hobbyInput};

  return(
    <div className={styles.add}>

    <div className={styles.text}>
    <form>
      <p className={styles.p}> Add Hobby </p>
      
      <br />
      <label>
      <b>Add existing hobby:      
        </b>    
      </label>
      <br /> 
      
      <input type="text" id="dropdownExistingHobby" name="dropdownExistingHobby" placeholder = "test" value = {dropdownExistingHobby} onChange = {(event) => setDropdownExistingHobby(event.target.value)}/> 
      <br />
      <label>
      <b>Add new Hobby     
        </b>    
      </label>  

      <br />

      <input type="text" id="newHobby" name="newHobby" placeholder = "Name of new hobby" value = {newHoby} onChange = {(event) => setNewHobby(event.target.value)}/>
      <br />

      <input type = "button" id = "existingHobbyButton" name = "existingHobbyButton" disabled = {dropdownExistingHobby === null} onClick = {() => addHobby(dropdownExistingHobby)} value = "Add Existing Hobby"/>

      <input type = "button" id = "newHobbyButton" name = "newHobbyButton" disabled = {newHobby === null} onClick = {() => addHobby(newHobby)} value = "Create New Hobby"/>

      <input type = "button" id = "cancelButton" name = "cancelButton" onClick = {() => addHobby()} value = "Cancel"/>
      
      </form>
      </div>
      </div>
  );
}


