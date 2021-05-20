import nc from "next-connect";
import { readEvents } from "../../../lib/backend-utils";
import { saveEvents } from "../../../lib/backend-utils";

const handler = nc().get((req, res) => {
const { id } = req.query;
const events = readEvents();
const event = events.find((e)=> e["id"] === +id);
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

 
}).post((req, res)=>{
  const newEvent = req.body;
  const origEvents = readEvents();
  const alteredEvents = [...origEvents, newEvent];

  
  res.status(200).json(newEvent);

  saveEvents(alteredEvents);


});

export default handler;