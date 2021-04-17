import { useState, useEffect } from "react";

export default function AddEvent({complete, currHobby}){

  const [hobbyInput, setHobby] = useState(currHobby);

  const [titleInput, setTitle] = useState('');

  const [timeInput, setTime] = useState('');

  const [locationInput, setLocation] = useState('');

  const [capacityInput, setCapacity] = useState('');
  
  const newEvent = {id: 7, hobby: hobbyInput, title: titleInput, time: timeInput,location: locationInput, number_joined: 1, max_number: capacityInput};

  return(
    <form>
      <input type="text" id="text_hobby" name="hobby" placeholder = "Hobby must be set" value = {hobbyInput} onChange = {() => setHobby(event.target.value)}/>

      <br></br>
      
      <input type="text" id="text_title" name="title" placeholder = "title must be set" value = {titleInput} onChange = {() => setTitle(event.target.value)}/>

      <br></br>

      <input type="text" id="text_time" name="time" placeholder = "set time of event" value = {timeInput} onChange = {() => setTime(event.target.value)}/>

      <br></br>

      <input type="location" id="text_location" name="location" placeholder = "set  location of event" value = {locationInput} onChange = {() => setLocation(event.target.value)}/>

      <br></br>

      <input type="text" id="text_capacity" name="capacity" placeholder = "set capacity of event" value = {capacityInput} onChange = {() => setCapacity(event.target.value)}/>

      <br></br>

      <input type = "button" id = "saveButton" name = "saveButton" disabled = {titleInput.length < 1} onClick = {() => complete(newEvent)} value = "Save"/>

      <input type = "button" id = "cancelButton" name = "cancelButton" onClick = {() => complete()} value = "Cancel"/>
      
      </form>
  );
}