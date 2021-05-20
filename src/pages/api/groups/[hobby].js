import { readHobbies, saveHobbies } from "../../../lib/backend-utils";

import nc from "next-connect";

const handler = nc().put((req, res) => {
  const { hobby } = req.query;
  const allHobbies = readHobbies();
  const userID = req.body;
  console.log(hobby);
  console.log(userID);
  const updatedHobbies = allHobbies.map(singleHobby => {
    if(singleHobby.name === hobby){
          const newHobbyMembers = [...singleHobby.members, userID];
          console.log(newHobbyMembers);
          return {...singleHobby, members: newHobbyMembers}
        } else{
          return singleHobby
        }
  });
  res.status(200).json(userID);
  saveHobbies(updatedHobbies);
 
})

export default handler;