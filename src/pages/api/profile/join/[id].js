import nc from "next-connect";
import { addParticipant } from "../../../../lib/backend-utils";


const handler = nc().put(async (req, res) => {
  const { id } = req.query;
  const eventID = req.body;

  const newProfile = await addParticipant(eventID, +id);
 
  res.status(200).json(newProfile);


 
});

export default handler;