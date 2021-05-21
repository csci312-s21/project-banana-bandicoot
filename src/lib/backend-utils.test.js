
import events from "../../data/seed.json";
import users from "../../data/profile.json";


import {
  knex,
  getParticipants,
  getEvent
} from "./backend-utils";

describe("Tests of the database utility functions", () => {
    let sampleEvent;


    beforeAll(async ()=>{
        sampleEvent = events[Math.floor(events.length/2)];

        
       
    });


    beforeEach(async () => {
      await knex.migrate.rollback();
      await knex.migrate.latest();
      await knex.seed.run();
    });


    test.only("getParticipants fetches the correct participants for an event", async ()=>{
        const testParticipants = await getParticipants(sampleEvent.id);

        expect(testParticipants.length).toBe(sampleEvent.participants.length);
        expect(testParticipants).toEqual(expect.arrayContaining(sampleEvent.participants));
    });

    test("getFilm fetches the correct film", async ()=>{
        const film = await getFilm(sampleFilm.id);

        expect(film.title).toBe(sampleFilm.title);
        expect(film.overview).toBe(sampleFilm.overview);
        expect(film.release_year).toBe(sampleFilm.release_year);

    });

    test("getFilm fetches film with the correct genres", async()=>{
        const film = await getFilm(sampleFilm.id);

        expect(film.genres.length).toBe(sampleFilm.genres.length);
        expect(film.genres).toEqual(expect.arrayContaining(sampleFilm.genres));

    });

    test("getFilm returns null on bad id", async ()=>{
        const film = await getFilm(-1);

        expect(film).toBeNull();
    });

    test("getAllFilms fetches all films", async()=>{

        const fetchedFilms = await getAllFilms();

        expect(fetchedFilms).toHaveLength(films.length);
        const testFilm = fetchedFilms.find((film)=>film.id === sampleFilm.id);
        expect(testFilm).toEqual(sampleFilm);
        const properties = ["id", "title", "overview", "poster_path", "vote_average", "release_date", "rating", "genres"];
        properties.forEach((prop)=>{expect(fetchedFilms[0]).toHaveProperty(prop)});
    });

    test("getAllFilms loads the correct genres", async()=>{
        const fetchedFilms = await getAllFilms();
        const testFilm = fetchedFilms.find((film)=>film.id === sampleFilm.id);

        expect(testFilm.genres.length).toBe(sampleFilm.genres.length);
        expect(testFilm.genres).toEqual(expect.arrayContaining(sampleFilm.genres));

    });


    test("updateFilmRating updates the film", async ()=>{
        const newFilm = { ...sampleFilm, rating: 4 };

        const updated = await updateFilmRating(newFilm.id, newFilm.rating);

        expect(updated).toBeTruthy();
        const updatedFilm = await getFilm(newFilm.id);

        expect(updatedFilm).toEqual(newFilm);

    });

    test("updateFilmRating returns false on bad id", async ()=>{
        const newFilm = { ...sampleFilm, rating: 4 };

        const updated = await updateFilmRating(-1, newFilm.rating);

        expect(updated).toBeFalsy();
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

