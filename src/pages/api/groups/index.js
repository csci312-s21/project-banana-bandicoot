import { readData } from "../../../lib/backend-utils";

import nc from "next-connect";

const handler = nc().get((req, res) => {
  const events = readData();
  const groups =  events.map((e) => {
      return e.hobby;
       });
  res.status(200).json(groups);


});

export default handler;
