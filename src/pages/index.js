import LoginPage from "../components/LoginPage.js";

import { useState } from "react";


import data from "../../data/seed.json";

import MenuBar from "../components/MenuBar";

import ProfilePage from "../components/ProfilePage.js";

import {
  useSession
} from "next-auth/client"


export default function Home() {
  const [ session ] = useSession();
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


  if(session){
    return  (
    
 <MenuBar allHobbies = {hobbies} >
 <ProfilePage person= {person} />
</MenuBar>);

  }
  else{
   return (
      <div>
      <LoginPage />
      </div>
    );
  }
  

  } 





  
