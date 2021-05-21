import nc from "next-connect";
import { getEvents, getEvent } from "../../../lib/backend-utils";

const handler = nc().get(async(req, res) => {
  
const { id } = req.query;
const event = await getEvent(+id);

res.status(200).json(event);


}).put((req, res) => {
  const { id } = req.query;
  const updatedEvent = req.body;
  const origEvents = readEvents();

  const alteredEvents = origEvents.map((e) => {
      if (e.id === +id) {
        return updatedEvent;
        }
        else{
      return e;
        }
       });

  
 
  res.status(200).json(updatedEvent);

  saveEvents(alteredEvents);

 
});

export default handler;