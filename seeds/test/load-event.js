const fs = require("fs");



exports.seed = async function (knex) {

  const eventContents = fs.readFileSync("./data/seed.json");
  const profileContents = fs.readFileSync("./data/profile.json");
  const hobbyContents = fs.readFileSync("./data/hobbies.json");
  const events = JSON.parse(eventContents);
  const profiles = JSON.parse(profileContents);
  const hobbies = JSON.parse(hobbyContents);
  const useEvents = events.map((event)=>{
    return {
    "id": event.id,
    "hobbyID": event.hobbyID,
    "title": event.title,
    "date": event.date,
    "time": event.time,
    "location": event.location,
    "edited": event.edited,
    "maxNum": event.maxNum,
    "creator":event.creator,
    }
  });

  const useProfiles = profiles.map((profile)=>{
    return {
    "id": profile.id,
    "name": profile.name, 
    "email":profile.email,
    }
  });

  const useHobbies = hobbies.map((hobby)=>{
    return {
    "id": hobby.id,
    "name": hobby.name
    }
  });
  // Deletes ALL existing entries
  await knex("Event").del();
  await knex.batchInsert("Event", useEvents, 100);
  await knex("users").del();
  await knex.batchInsert("users", useProfiles, 100);
  await knex("Hobby").del();
  await knex.batchInsert("Hobby", useHobbies, 100);

  let eventMap = [];
  let hobbyMap = [];

   profiles.forEach((profile)=>{
    profile.joinedEvents.forEach((event)=>{
        eventMap.push({
        eventID: event,
        userID: profile.id
       });
    });
  });

    profiles.forEach((profile)=>{
    profile.hobby.forEach((hobby)=>{
        hobbyMap.push({
        hobbyID: hobby, 
        userID: profile.id
       });
    });
  });




     




  await knex("EventUser").del();
  await knex.batchInsert("EventUser", eventMap, 100);
  await knex("HobbyUser").del();
  await knex.batchInsert("HobbyUser", hobbyMap, 100);

};
