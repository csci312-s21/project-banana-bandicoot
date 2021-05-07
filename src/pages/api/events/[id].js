import nc from "next-connect";
import { readData } from "../../../lib/backend-utils";
import { saveData } from "../../../lib/backend-utils";

const handler = nc().get((req, res) => {
const { id } = req.query;
const events = readData();
const event = event.find((e)=> e["id"] === +id);
res.status(200).json(event);

}).put((req, res) => {
  const { id } = req.query;
  const updatedEvent = req.body;
  const origEvents = readData();

  const alteredEvents = origEvents.map((e) => {
      if (e.id === +id) {
        return updatedEvent;
        }
        else{
      return e;
        }
       });

  
 
  res.status(200).json(updatedEvent);

  saveData(alteredEvent);

 
});

export default handler;