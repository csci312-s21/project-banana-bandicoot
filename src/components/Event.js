import { useState, useEffect } from "react";

export default function Event({ title, time, location , numJoined , maxNumber }) {

//let numPeople = numJoined;

  const [numPeople, setNumPeople ] = useState(numJoined);

 useEffect(() =>{
    console.log(numPeople);
  }, [numPeople]);

return (
            <div>
            <h4> {title} </h4>
            <h5> {location} || {time} </h5>
            <h5> Spots: {numPeople} / {maxNumber} </h5>
            <input type = "button" id = "joinButton" name = "joinButton" value = "Join" onClick = {() => setNumPeople(numPeople + 1)}/>
            
            </div>
);
}

