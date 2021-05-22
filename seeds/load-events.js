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
    "creator": event.creator,
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
  await knex("Hobby").del();
  await knex.batchInsert("Hobby", useHobbies, 100);

  let eventMap = [];
  let hobbyMap = [];

  events.forEach((event)=>{
    event.participants.forEach((part)=>{
        eventMap.push({
        eventID: event.id,
        userID:part
       });
    });

  });


  hobbies.forEach((hobby)=>{
    hobby.members.forEach((mem)=>{
        hobbyMap.push({
        hobbyID: hobby.id, 
        userID: mem
       });

    });

  });


  await knex("EventUser").del();
  await knex.batchInsert("EventUser", eventMap, 100);
  await knex("HobbyUser").del();
  await knex.batchInsert("HobbyUser", hobbyMap, 100);

};
