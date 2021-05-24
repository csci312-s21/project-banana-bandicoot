import { getEvents, addEvent } from "../../../lib/backend-utils";

import nc from "next-connect";

const handler = nc().get(async(req, res) => {
  const events = await getEvents();
  res.status(200).json(events);

}).post(async (req, res)=>{

  const newEvent = req.body;
  const eventObj = {
    hobbyID: newEvent.hobbyID,
    title: newEvent.title, 
    date: newEvent.date, 
    time: newEvent.time, 
    location: newEvent.location, 
    maxNum: newEvent.maxNum, 
    edited: newEvent.edited, 
    creator: newEvent.creator
  };
  const firstParticipant = newEvent.participants[0];

  const result = await addEvent(eventObj, firstParticipant);
  
  res.status(200).json(result);

});

export default handler;
