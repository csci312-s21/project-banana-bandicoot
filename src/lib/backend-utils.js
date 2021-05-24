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
  return await getUser(part);
}

export async function removeParticipant(eventID, part) {
  
  const result = await knex("EventUser")
    .where({"eventID": eventID, "userID": part}).del();

  return await getUser(part);
}

export async function addEvent(event, firstParticipant) {
  [event.id] = await knex("Event").insert(event);
  console.log("HERE")
  const newEU = { eventID: event.id, 
    userID: firstParticipant };
  const part = await knex("EventUser").insert(newEU);
 return await getUser(firstParticipant);

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

export async function getGroup(name) {
  const [group] = await knex("Hobby").select().where({name:name});
  if(group){
    group.members = await getMembers(group.id);
    group.events = await getGroupEvents(group.id);
    return group;
  }
  return null;
  
}


export async function addGroup(hobby, firstMember) {
  [hobby.id] = await knex("Hobby").insert(hobby);
  const newHU = { hobbyID: hobby.id, 
    userID: firstMember };
  const part = await knex("HobbyUser").insert(newHU);
 return hobby;
}

export async function addMember(hobbyID, member) {
 const newHU = { hobbyID: hobbyID, 
    userID: member };
  const result = await knex("HobbyUser").insert(newHU);

  return(result);
}


export async function getUser(id){
  const [user] = await knex("users").select().where({id:id});
  if(user){
    user.hobby = await getUserHobbies(id);
    user.joinedEvents = await getUserEvents(id);
    return user;
  }
  return null;
}

export async function getUserEvents(id){
  const uE = await knex.select("id")
    .from("EventUser")
    .join("Event", "Event.id", "EventUser.eventID")
    .where({"userID":id});
  const userEvents = uE.map((e)=>{
    return e.id
  });
  return userEvents;
}

export async function getUserHobbies(id){
  const uH = await knex.select("name")
    .from("HobbyUser")
    .join("Hobby", "Hobby.id", "HobbyUser.hobbyID")
    .where({"userID":id});
  const userHobbies = uH.map((h)=>{
    return h.name
  });
  return userHobbies;
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

