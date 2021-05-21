/* eslint-disable */
import fs from "fs";
import path from "path";

import knexConfig from "../../knexfile";
import knexInitializer from "knex";

export const knex = knexInitializer(
  knexConfig[process.env.NODE_ENV || "development"]
);

export async function getEvents() {
  const rows = await knex("Event").select();
  return rows;
}

export async function getEvent(id) {
  const rows = await knex("Event").select().where({id:id});
  if(rows[0]){
    return rows[0];
  }
  return null;
  
}

export async function updateEvent(event) {
 
 const rows = await knex("Event").update(event).where({id:event.id});
 if(rows){
   return true;
 }
 return false;
}

export async function addEvent(event) {
  [event.id] = await knex("Event").insert(event);

 return event;


}


// export function resetEvents() {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const orig = path.join(dataDirectory, "seed-orig.json");
//   const dest = path.join(dataDirectory, "seed.json");
//   fs.copyFileSync(orig, dest);
// }


// export function readEvents() {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const fullPath = path.join(dataDirectory, "seed.json");
//   if (!fs.existsSync(fullPath)) {
//     resetEvents();
//   }
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const events = JSON.parse(fileContents);

//   return events;
// }

// export function saveEvents(events) {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const fullPath = path.join(dataDirectory, "seed.json");
//   if (!fs.existsSync(fullPath)) {
//     resetEvents();
//   }
//   fs.writeFileSync(fullPath, JSON.stringify(events), "utf8");
// }


// export function resetHobbies() {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const orig = path.join(dataDirectory, "hobbies-orig.json");
//   const dest = path.join(dataDirectory, "hobbies.json");
//   fs.copyFileSync(orig, dest);
// }


// export function readHobbies() {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const fullPath = path.join(dataDirectory, "hobbies.json");
//   if (!fs.existsSync(fullPath)) {
//     resetHobbies();
//   }
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const hobbies = JSON.parse(fileContents);

//   return hobbies;
// }

// export function saveHobbies(hobbies) {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const fullPath = path.join(dataDirectory, "hobbies.json");
//   if (!fs.existsSync(fullPath)) {
//     resetHobbies();
//   }
//   fs.writeFileSync(fullPath, JSON.stringify(hobbies), "utf8");
// }

// export function resetProfile() {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const orig = path.join(dataDirectory, "profile-orig.json");
//   const dest = path.join(dataDirectory, "profile.json");
//   fs.copyFileSync(orig, dest);
// }


// export function readProfile() {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const fullPath = path.join(dataDirectory, "profile.json");
//   if (!fs.existsSync(fullPath)) {
//     resetProfile();
//   }
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const profile = JSON.parse(fileContents);

//   return profile;
// }

// export function saveProfile(profile) {
//   const dataDirectory = path.join(process.cwd(), "data");
//   const fullPath = path.join(dataDirectory, "profile.json");
//   if (!fs.existsSync(fullPath)) {
//     resetProfile();
//   }
//   fs.writeFileSync(fullPath, JSON.stringify(profile), "utf8");
// }