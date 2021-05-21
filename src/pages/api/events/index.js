import { getEvents } from "../../../lib/backend-utils";

import nc from "next-connect";

const handler = nc().get(async(req, res) => {
  const events = await getEvents();
  res.status(200).json(events);

});
// }).post((req, res)=>{
//   const newEvent = req.body;

//   const origEvents = readEvents();
  
//   const alteredEvents = [...origEvents, newEvent];

  
//   res.status(200).json(newEvent);

//   saveEvents(alteredEvents);


// });

export default handler;
