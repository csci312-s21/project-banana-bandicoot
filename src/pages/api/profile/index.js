import { readProfile } from "../../../lib/backend-utils";

import nc from "next-connect";

const handler = nc().get((req, res) => {
  const events = readProfile();
  res.status(200).json(events);


});

export default handler;
