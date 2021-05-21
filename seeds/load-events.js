const fs = require("fs");



exports.seed = async function (knex) {
  const contents = fs.readFileSync("./data/seed.json");
  const profileContents = fs.readFileSync("./data/profile.json");
  const data = JSON.parse(contents);
  const profiles = JSON.parse(profileContents);
  const useProfs = profiles.map((profile)=>{
    return {
      name: profile.name,
      email: profile.email, 
      hobby: profile.hobby,
    }
  });
  // Deletes ALL existing entries
  await knex("Profile").del();
  await knex.batchInsert("Profile", useProfs, 100);
  await knex("Event").del();
  await knex.batchInsert("Event", data, 100);

  let eventMap = [];

  profiles.forEach((profile)=>{
    profile.joinedEvents.forEach((event)=>{
        eventMap.push({
        eventId: event,
        profileID:profile.id
       });

    });

  });

};
