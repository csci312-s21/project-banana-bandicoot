import styles from "../styles/AddEvent.module.css";

import PropTypes from "prop-types"

import { useState } from "react";

export default function AddEvent({complete, currHobby, person}){


  const [titleInput, setTitle] = useState("");

  const [dateInput, setDate] = useState("");

  const [timeInput, setTime] = useState("");

  const [locationInput, setLocation] = useState("");

  const [capacityInput, setCapacity] = useState("");

  //setId(currId + 1);


  const newEvent = {hobbyID: currHobby, title: titleInput, date: dateInput, time: timeInput,location: locationInput, maxNum: capacityInput, participants: [person.id], edited: (new Date).toISOString(), creator: person.id};

  return(
    <div className={styles.add}>

    <div>
    <form>
      <p className={styles.p}> Add Event </p>
      
      <br />
      <label>
      <b>Title:     
        </b>    
      </label>  

      <br />
      
      <input type="text" id="text_title" name="title" placeholder = "title must be set" value = {titleInput} onChange = {(event) => setTitle(event.target.value)}/>
      <br />
      <label>
      <b>Date:     
        </b>    
      </label>  
      <br />

      <input type="text" id="text_date" name="date" placeholder = "set date of event" value = {dateInput} onChange = {(event) => setDate(event.target.value)}/>
      <br />
      <label>
      <b>Time:     
        </b>    
      </label>  
      <br />

      <input type="text" id="text_time" name="time" placeholder = "set time of event" value = {timeInput} onChange = {(event) => setTime(event.target.value)}/>
      <br />
      <label>
      <b>Location:     
        </b>    
      </label>  
      <br />

      <input type="location" id="text_location" name="location" placeholder = "set  location of event" value = {locationInput} onChange = {(event) => setLocation(event.target.value)}/>
      <br />
      <label>
      <b>Capacity:     
        </b>    
      </label>  
      <br />

      <input type="text" id="text_capacity" name="capacity" placeholder = "set capacity of event" value = {capacityInput} onChange = {(event) => setCapacity(event.target.value)}/>

      <br />

      <input type = "button" id = "saveButton" name = "saveButton" disabled = {titleInput.length < 1 || locationInput.length < 1 || timeInput.length <1 || dateInput.length < 1} onClick = {() => complete(newEvent)} value = "Save"/>

      <input type = "button" id = "cancelButton" name = "cancelButton" onClick = {() => complete()} value = "Cancel"/>
      
      </form>
      </div>
      </div>
  );
}


AddEvent.propTypes = {
  currHobby: PropTypes.string,
  person: PropTypes.shape({
    id: PropTypes.string,
  }),
  complete: PropTypes.func.isRequired
};