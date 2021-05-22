/* eslint-disable */
import fs from "fs";
import path from "path";

import knexConfig from "../../knexfile";
import knexInitializer from "knex";

export const knex = knexInitializer(
  knexConfig[process.env.NODE_ENV || "development"]
);

export async function getEvents() {
  const events = await knex("Event").select();
  await Promise.all(
  events.map(async (event)=>{
    event.participants = await getParticipants(event.id);
  }));
  return events;
}

export async function getParticipants(id){
  const part = await knex.select("id")
    .from("EventUser")
    .join("users", "users.id", "EventUser.userID")
    .where({"eventID":id});
  const participants = part.map((p)=>{
    return p.id
  });
  return participants;
}

export async function getEvent(id) {
  const [event] = await knex("Event").select().where({id:id});
  if(event){
    event.participants = await getParticipants(id);
    return event;
  }
  return null;
  
}

export async function addParticipant(eventID, part) {
 const newEU = { eventID: eventID, 
    userID: part };
  const result = await knex("EventUser").insert(newEU);

  return(result);
}


export async function addEvent(event, firstParticipant) {
  [event.id] = await knex("Event").insert(event);
  const newEU = { eventID: event.id, 
    userID: firstParticipant };
  const part = await knex("EventUser").insert(newEU);
 return {...event, participants:[firstParticipant]};

}

export async function getMembers(id){
  const mem = await knex.select("name")
    .from("HobbyUser")
    .join("users", "users.id", "HobbyUser.userID")
    .where({"hobbyID":id});
  const members = mem.map((m)=>{
    return m.name
  });
  return members;
}

export async function getGroupEvents(id){
  const gE = await knex.select("id")
    .from("Event")
    .where({"hobbyID":id});
  const groupEvents = gE.map((e)=>{
    return e.id
  });
  return groupEvents;
}


export async function getGroups() {
  const groups = await knex("Hobby").select();
  await Promise.all(
  groups.map(async (group)=>{
    group.members = await getMembers(group.id);
    group.events = await getGroupEvents(group.id);
  }));
  return groups;
}
