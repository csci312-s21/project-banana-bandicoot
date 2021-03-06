import nc from "next-connect";
import { getEvent, addParticipant, deleteEvent } from "../../../lib/backend-utils";

const handler = nc().get(async(req, res) => {
  
const { id } = req.query;
const event = await getEvent(+id);

res.status(200).json(event);


}).put(async(req, res) => {
  const { id } = req.query;
  const newParticipant = req.body;


  const result = await addParticipant(+id, newParticipant);

  res.status(200).json(result);

 
}).delete(async(req,res) => {
  const { id } = req.query;

  await deleteEvent(id);

  res.status(200).json(id);
});

export default handler;