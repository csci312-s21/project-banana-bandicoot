
import styles from "../styles/AddEvent.module.css";
 
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
 
import { useState } from "react";
 
export default function AddHobby({addHobby, allHobbies}){
 
 const [newHobby, setNewHobby] = useState();
  const [dropdownExistingHobby, setDropdownExistingHobby] = useState();
 //setId(currId + 1);
 
 //const newHobby = {name: hobbyInput};
  // const [dropdownOpen, setDropdownOpen] = useState(false);
 
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
     
 
     <input type = "button" id = "existingHobbyButton" name = "existingHobbyButton" disabled = {dropdownExistingHobby === null} onClick = {() => setDropdownExistingHobby(event.target.hobby)} value = "Add Existing Hobby"/>
 
     <input type = "button" id = "newHobbyButton" name = "newHobbyButton" disabled = {newHobby === null} onClick = {() => addHobby(newHobby)} value = "Create New Hobby"/>
 
     <input type = "button" id = "cancelButton" name = "cancelButton" onClick = {() => addHobby()} value = "Cancel"/>
    
     </form>
     </div>
     </div>
 );
}
 
 
 
 
//SAVE
 
/*
{allHobbies.map((hobby) => {
         <DropdownItem> {hobby} </DropdownItem>
       })}
 
       <DropdownButton id="dropdown-basic-button" title="Dropdown button">
       <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
     </DropdownButton>






     take 2




     
       */
