import { readHobbies, saveHobbies } from "../../../lib/backend-utils";

import nc from "next-connect";

const handler = nc().get((req, res) => {
  const groups = readHobbies();
  const hobbies =  groups.map((h) => {
      return h.name;
       });
  res.status(200).json(hobbies);


}).post((req, res)=>{
  const newHobby = req.body;
  const origHobbies = readHobbies();
  const alteredHobbies = [...origHobbies, newHobby];

  
  res.status(200).json(newHobby);

  saveHobbies(alteredHobbies);


});

export default handler;
