import { getGroups, addGroup } from "../../../lib/backend-utils";

import nc from "next-connect";

const handler = nc().get(async (req, res) => {
  const hobbies =  await getGroups();
  res.status(200).json(hobbies);


}).post(async(req, res)=>{
  const newHobby = req.body;
  const hobbyObj = {
    name: newHobby.name,
  };
  const firstMem = newHobby.members[0];

  const added = await addGroup(hobbyObj, firstMem);
  res.status(200).json(added);



});

export default handler;
