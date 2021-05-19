import nc from "next-connect";
import { readProfile } from "../../../lib/backend-utils";
import { saveProfile } from "../../../lib/backend-utils";

const handler = nc().get((req, res) => {
const { id } = req.query;
const profiles = readProfile();
const profile = profiles.find((p)=> p["id"] === +id);

res.status(200).json(profile);

}).put((req, res) => {
  const { id } = req.query;
  const updatedProfile = req.body;
  const profiles = readProfile();

  const alteredProfiles = profiles.map((p) => {
      if (p.id === +id) {
        return updatedProfile;
        }
        else{
      return p;
        }
       });

  
 
  res.status(200).json(updatedProfile);

  saveProfile(alteredProfiles);

 
});

export default handler;