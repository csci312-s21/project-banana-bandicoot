import { readData } from "../../../lib/backend-utils";

import nc from 'next-connect';

const handler = nc().get((req, res) => {
  const events = readData();
  res.status(200).json(events);


}).post(());

export default handler;
