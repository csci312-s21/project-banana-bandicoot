import nc from "next-connect";
import { getUser } from "../../../lib/backend-utils";

const handler = nc().get(async(req, res) => {
const { id } = req.query;
const profile = await getUser(id);

res.status(200).json(profile);

});

export default handler;