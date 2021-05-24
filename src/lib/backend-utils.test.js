
import events from "../../data/test-seed.json";

import users from "../../data/test-profile.json";

import hobbies from "../../data/hobbies.json";


import {
  knex,
  getParticipants,
  getEvent, 
  getEvents, 
  addEvent, 
  addParticipant, 
  removeParticipant,
  getMembers, 
  getGroups, 
  getGroup,
  getGroupEvents, 
  addGroup, 
  addMember, 
  getUser
} from "./backend-utils";

describe("Tests of the database utility functions", () => {
    let sampleEvent;
    let sampleHobby;
    let sampleUser;



    beforeAll(async ()=>{
        sampleEvent = events[Math.floor(events.length/2)];
        sampleHobby= hobbies[Math.floor(hobbies.length/2)];
        sampleUser= users[Math.floor(users.length/2)];
   
   
    });


    beforeEach(async () => {
      await knex.migrate.rollback();
      await knex.migrate.latest();
      await knex.seed.run();
    });


describe("Events", () => {



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
        const addedEvent = await getUser(added.id);

        expect(addedEvent).toEqual(added);


    });

    test("addParticipant adds participants to correct event", async ()=>{
        const newEvent = { ...sampleEvent };

        const updated = await addParticipant(newEvent.id, 4);

        const newPart = [...newEvent.participants, "cscheinfeld"];

        const updatedEvent = await getEvent(newEvent.id);

        expect(updated).toBeTruthy();
        expect(updatedEvent.participants.length).toBe(newPart.length);
        expect(updatedEvent.participants).toEqual(expect.arrayContaining(newPart));

    });


    test("removeParticipant removes correct participant from event", async ()=>{
        const newEvent = { ...sampleEvent };

  

        const updated = await removeParticipant(newEvent.id, 1);


        newEvent.participants.shift();

        const updatedEvent = await getEvent(newEvent.id);

        expect(updated).toBeTruthy();
        expect(updatedEvent.participants.length).toBe(newEvent.participants.length);
        expect(updatedEvent.participants).toEqual(expect.arrayContaining(newEvent.participants));

    });


});
describe("Groups", () => {

    test.skip("getMembers fetches the correct members for a group/hobby", async ()=>{
        const testMembers = await getMembers(sampleHobby.id);

        expect(testMembers.length).toBe(sampleHobby.members.length);
        expect(testMembers).toEqual(expect.arrayContaining(sampleHobby.members));
    });

    test("getGroupEvents fetches the correct events for a group/hobby", async ()=>{
        const testEvents = await getGroupEvents(sampleHobby.id);

        expect(testEvents.length).toBe(sampleHobby.events.length);
        expect(testEvents).toEqual(expect.arrayContaining(sampleHobby.events));
    });


    test.skip("getGroups fetches all groups", async()=>{

        const fetchedGroups = await getGroups();

        expect(fetchedGroups).toHaveLength(hobbies.length);
        const testGroup = fetchedGroups.find((group)=>group.id === sampleHobby.id);
        expect(testGroup).toEqual(sampleHobby);
        const properties = ["id", "name", "members", "events"];
        properties.forEach((prop)=>{expect(fetchedGroups[0]).toHaveProperty(prop)});
    });

    test.skip("getGroups loads the correct members", async()=>{
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


     test("getGroup fetches the correct hobby", async ()=>{
        const hobby = await getGroup(sampleHobby.name);
         expect(hobby.id).toBe(sampleHobby.id);
         expect(hobby.name).toBe(sampleHobby.name);
     

    });

    test.skip("getGroup fetches hobby with the correct members", async()=>{
        const hobby = await getGroup(sampleHobby.name);

        expect(hobby.members.length).toBe(sampleHobby.members.length);
        expect(hobby.members).toEqual(expect.arrayContaining(sampleHobby.members));

    });

     test("getGroup fetches hobby with the correct events", async()=>{
        const hobby = await getGroup(sampleHobby.name);

        expect(hobby.events.length).toBe(sampleHobby.events.length);
        expect(hobby.events).toEqual(expect.arrayContaining(sampleHobby.events));

    });

    test("getGroup returns null on bad id", async ()=>{
        const group = await getGroup(-1);

        expect(group).toBeNull();
    });

     test("addGroup adds a hobby with correct members. ", async ()=>{
        const newHobby = { 
          name: "Skiing", 
          members: [4] 
          };

        const firstMem = newHobby.members[0];
        const hobbyObj = {
           name:newHobby.name
        };

        const added = await addGroup(hobbyObj, firstMem);

        expect(added).toBeTruthy();

        const addedHobby = await getGroup(added.name);

        expect(addedHobby).toEqual({...added, members: [ "cscheinfeld" ], events:[]});

    });


    test.skip("addMember adds member to correct hobby", async ()=>{
        const newHobby = { ...sampleHobby };

        const updated = await addMember(newHobby.id, 5);

        const newMem = [...newHobby.members, "dbrey"];

        const updatedHobby = await getGroup(newHobby.name);

        expect(updated).toBeTruthy();
        expect(updatedHobby.members.length).toBe(newMem.length);
        expect(updatedHobby.members).toEqual(expect.arrayContaining(newMem));


    });

 });


 describe("Users", () => {
     test("getUser fetches the correct user", async ()=>{
        const user = await getUser(sampleUser.id);
         expect(user.id).toBe(sampleUser.id);
         expect(user.name).toBe(sampleUser.name);
    
    });


    test("getUser fetches user with the correct events", async()=>{
        const user = await getUser(sampleUser.id);

        expect(user.joinedEvents.length).toBe(sampleUser.joinedEvents.length);
        expect(user.joinedEvents).toEqual(expect.arrayContaining(sampleUser.joinedEvents));

    });

     test("getUser fetches user with the correct hobbies", async()=>{
        const user = await getUser(sampleUser.id);
      

        expect(user.hobby.length).toBe(sampleUser.hobby.length);
        expect(user.hobby).toEqual(expect.arrayContaining(sampleUser.hobby));

    });

    test("getUser returns null on bad id", async ()=>{
        const user = await getUser(-1);

        expect(user).toBeNull();
    });


 });

});
