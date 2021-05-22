
import events from "../../data/seed.json";
import users from "../../data/profile.json";
import hobbies from "../../data/hobbies.json";


import {
  knex,
  getParticipants,
  getEvent, 
  getEvents, 
  addEvent, 
  addParticipant, 
  getMembers, 
  getGroups, 
  getGroupEvents
} from "./backend-utils";

describe("Tests of the database utility functions", () => {
    let sampleEvent;
    let sampleHobby;


    beforeAll(async ()=>{
        sampleEvent = events[Math.floor(events.length/2)];
        sampleHobby= hobbies[Math.floor(hobbies.length/2)];
   
    });


    beforeEach(async () => {
      await knex.migrate.rollback();
      await knex.migrate.latest();
      await knex.seed.run();
    });


    test("getParticipants fetches the correct participants for an event", async ()=>{
        const testParticipants = await getParticipants(sampleEvent.id);

        expect(testParticipants.length).toBe(sampleEvent.participants.length);
        expect(testParticipants).toEqual(expect.arrayContaining(sampleEvent.participants));
    });

    test("getEvent fetches the correct event", async ()=>{
        const event = await getEvent(sampleEvent.id);
         expect(event.hobbyID).toBe(sampleEvent.hobbyID);
         expect(event.title).toBe(sampleEvent.title);
         expect(event.date).toBe(sampleEvent.date);
         expect(event.time).toBe(sampleEvent.time);
         expect(event.location).toBe(sampleEvent.location);
         expect(event.edited).toBe(sampleEvent.edited);
         expect(event.maxNum).toBe(sampleEvent.maxNum);
         expect(event.creator).toBe(sampleEvent.creator);
         expect(event.id)
         expect(event.id).toBeGreaterThanOrEqual(0);

    });

    test("getEvent fetches event with the correct participants", async()=>{
        const event = await getEvent(sampleEvent.id);

        expect(event.participants.length).toBe(sampleEvent.participants.length);
        expect(event.participants).toEqual(expect.arrayContaining(sampleEvent.participants));

    });

    test("getEvent returns null on bad id", async ()=>{
        const event = await getEvent(-1);

        expect(event).toBeNull();
    });

    test("getEvents fetches all events", async()=>{

        const fetchedEvents = await getEvents();

        expect(fetchedEvents).toHaveLength(events.length);
        const testEvent = fetchedEvents.find((event)=>event.id === sampleEvent.id);
        expect(testEvent).toEqual(sampleEvent);
        const properties = ["id", "title", "hobbyID", "date", "time", "location", "edited", "maxNum", "creator"];
        properties.forEach((prop)=>{expect(fetchedEvents[0]).toHaveProperty(prop)});
    });

    test("getEvents loads the correct participants", async()=>{
        const fetchedEvents = await getEvents();
        const testEvent = fetchedEvents.find((event)=>event.id === sampleEvent.id);

        expect(testEvent.participants.length).toBe(sampleEvent.participants.length);
        expect(testEvent.participants).toEqual(expect.arrayContaining(sampleEvent.participants));

    });


    test("addEvent adds an event with correct participants. ", async ()=>{
        const newEvent = { ...sampleEvent, participants: [5] };

        const firstPar = newEvent.participants[0];
        const eventObj = {
           hobbyID: newEvent.hobbyID,
           title: newEvent.title, 
           date: newEvent.date, 
           time: newEvent.time, 
           location: newEvent.location, 
           maxNum: newEvent.maxNum, 
           edited: newEvent.edited, 
           creator: newEvent.creator
        }
  

        const added = await addEvent(eventObj, firstPar);

        expect(added).toBeTruthy();
        const addedEvent = await getEvent(added.id);

        expect(addedEvent).toEqual(added);


    });

    test("addParticipant adds participants to correct event", async ()=>{
        const newEvent = { ...sampleEvent };

        const updated = await addParticipant(newEvent.id, 2);

        const newPart = [...newEvent.participants, 2];

        const updatedEvent = await getEvent(newEvent.id);

        expect(updated).toBeTruthy();
        expect(updatedEvent.participants.length).toBe(newPart.length);
        expect(updatedEvent.participants).toEqual(expect.arrayContaining(newPart));

    });

    test("getMembers fetches the correct members for a group/hobby", async ()=>{
        const testMembers = await getMembers(sampleHobby.id);

        expect(testMembers.length).toBe(sampleHobby.members.length);
        expect(testMembers).toEqual(expect.arrayContaining(sampleHobby.members));
    });

    test("getGroupEvents fetches the correct events for a group/hobby", async ()=>{
        const testEvents = await getGroupEvents(sampleHobby.id);

        expect(testEvents.length).toBe(sampleHobby.events.length);
        expect(testEvents).toEqual(expect.arrayContaining(sampleHobby.events));
    });


    test("getGroups fetches all groups", async()=>{

        const fetchedGroups = await getGroups();

        expect(fetchedGroups).toHaveLength(hobbies.length);
        const testGroup = fetchedGroups.find((group)=>group.id === sampleHobby.id);
        expect(testGroup).toEqual(sampleHobby);
        const properties = ["id", "name", "members", "events"];
        properties.forEach((prop)=>{expect(fetchedGroups[0]).toHaveProperty(prop)});
    });

    test("getGroups loads the correct members", async()=>{
        const fetchedGroups = await getGroups();
        const testGroup = fetchedGroups.find((group)=>group.id === sampleHobby.id);

        expect(testGroup.members.length).toBe(sampleHobby.members.length);
        expect(testGroup.members).toEqual(expect.arrayContaining(sampleHobby.members));

    });

    test("getGroups loads the correct group events", async()=>{
        const fetchedGroups = await getGroups();
        const testGroup = fetchedGroups.find((group)=>group.id === sampleHobby.id);

        expect(testGroup.events.length).toBe(sampleHobby.events.length);
        expect(testGroup.events).toEqual(expect.arrayContaining(sampleHobby.events));

    });



});

// import sampleEvents from "../../data/test-data.json";

// import {
//   knex,
//   getEvents,
//   getEvent,
//   updateEvent,
//   addEvent,
// } from "./backend-utils";



// describe("Tests of the database utility functions", () => {

//   beforeEach(async () => {
//     await knex.migrate.rollback();
//     await knex.migrate.latest();
//     await knex.seed.run();
//   });


//   describe("get events", () => {
//     test("getEvents gets all events", async () => {

//       const events = await getEvents();

//       sampleEvents.sort((a, b) => a.title.localeCompare(b.title));
//       events.sort((a, b) => a.title.localeCompare(b.title))
//       expect(events).toEqual(sampleEvents);
//     });


//     test("getEvent gets a single event", async () => {
//       const sampleEvent = sampleEvents[Math.floor(sampleEvents.length / 2)];

//       const event = await getEvent(sampleEvent.id);

//       expect(event).toEqual(sampleEvent);
//     });

//     test("getEvent returns null if no event matching the id is found", async () => {
//       const result = await getEvent(-1);

//       expect(result).toBeNull();
//     });



//   });

//   describe("add events", () => {


//     test("addEvent returns an event with new id", async () => {
//       const sample = {
//         hobby: "hobby",
//         title: "new event",
//         date: "05/30",
//         time: "5:00pm",
//         location: "KDR",
//         edited: "2020-08-10T18:00:40Z",
//         maxNum: "1"
//       };

//       const event = await addEvent(sample);
//       expect(event.hobby).toBe(sample.hobby);
//       expect(event.title).toBe(sample.title);
//       expect(event.date).toBe(sample.date);
//        expect(event.time).toBe(sample.time);
//       expect(event.location).toBe(sample.location);
//       expect(event.edited).toBe(sample.edited);
//        expect(event.maxNum).toBe(sample.maxNum);
//       expect(event.id)
//       expect(event.id).toBeGreaterThanOrEqual(0);
//     });

//     test("addEvent should reject event with no title", async () => {
//       expect.assertions(1);
//       const sample = {
//         hobby: "hobby",
//         date: "05/30",
//         time: "5:00pm",
//         location: "KDR",
//         edited: "2020-08-10T18:00:40Z",
//         maxNum: "1"
//       };

//       try {
//         await addEvent(sample);
//       } catch (e) {
//         expect(e.toString()).toContain("Error");
//       }
//     });

//      test("addEvent should reject event with no hobby", async () => {
//       expect.assertions(1);
//       const sample = {
//         title: "title",
//         date: "05/30",
//         time: "5:00pm",
//         location: "KDR",
//         edited: "2020-08-10T18:00:40Z",
//         maxNum: "1"
//       };

//       try {
//         await addEvent(sample);
//       } catch (e) {
//         expect(e.toString()).toContain("Error");
//       }
//     });
//      test("addEvent should reject event with no edit time", async () => {
//       expect.assertions(1);
//       const sample = {
//         hobby: "hobby",
//         title: "title",
//         date: "05/30",
//         time: "5:00pm",
//         location: "KDR",
//         maxNum: "1"
//       };

//       try {
//         await addEvent(sample);
//       } catch (e) {
//         expect(e.toString()).toContain("Error");
//       }
//     });

//   });

//   describe("update events", () => {
//     test("updateEvent updates the event", async () => {
//       const sample = { ...sampleEvents[0], title: "The Masters" };
//       const success = await updateEvent(sample);
//       expect(success).toBeTruthy();
//       const rows = await knex("Event").where({ id: sample.id }).select();

//       const event = rows[0];
//       expect(event.title).toBe(sample.title);
//     });

//     test("updateEvent returns 0 if the id doesn't exist", async () => {
//       const sample = { id: -1, title: "Bad event" };
//       const success = await updateEvent(sample);
//       expect(success).toBeFalsy();
//     });
//   });

// });

