import nc from "next-connect";
import { removeParticipant } from "../../../../lib/backend-utils";


const handler = nc().put(async (req, res) => {
  const { id } = req.query;
  const eventID = req.body;

  const newProfile = await removeParticipant(eventID, +id);
   console.log(id);
   console.log(eventID);
  res.status(200).json(newProfile);


 
});

export default handler;