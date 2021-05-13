
import { useState } from "react";


import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";


export default function Home() {


  
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



  return  (
    
 <MenuBar allHobbies = {hobbies} >
 <ProfilePage person= {person} />
</MenuBar>);
}


       