import nc from "next-connect";
import { getGroup, addMember } from "../../../lib/backend-utils";

const handler = nc().get(async(req, res) => {
  
const { id } = req.query;
const group = await getGroup(+id);

res.status(200).json(group);


}).put(async (req, res) => {
  const { id } = req.query;
  const newMember = req.body;

  const result = await addMember(+id, newMember);
 
  res.status(200).json(result);

 
});

export default handler;