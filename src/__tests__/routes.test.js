/* eslint-disable */
import path from "path";
import request from "supertest";
import {
  startApp,
  stopApp,
  nextBuild,
  nextServer,
} from "../test-utils/next-test-utils";
const fs = require("fs");




import { readEvents, resetEvents, readHobbies, resetHobbies } from "../lib/backend-utils";

jest.setTimeout(1000 * 80);

describe("Hobby Buddy API", () => {
  let server;
  let events;
  let sampleEvent;
  let sampleProfile;
  let hobbies

 	beforeAll(() => {
		const appDir = path.join(__dirname, "../../");
		return nextBuild(appDir,[], {stderr:true, stdout: true})
			.then((results)=>{
				if (results.stderr){
					console.log(results.stderr);
				}
				const app = nextServer({
					dir: appDir,
					dev: false,
					quiet: true,
				});
			return startApp(app)
			})
			.then((s)=>{
				server = s;
			})
			.catch((rejection) =>{
				console.log(rejection);
			});
   }, 1000 * 100);

  beforeEach(async () => {

    events =  fs.readFileSync("./data/seed.json");
    const groups =  fs.readFileSync("./data/hobbies.json");
    hobbies =  groups.map((h) => {
      return h.name;
       });
    sampleEvent = events[Math.floor(events.length / 2)];

    sampleProfile =  {
    "name": "Leili Manafi",
    "hobby": ["Basketball"],
    "joinedEvents": [3,4],
    "id": 3
    }

    
  });

  /**
   * Shut down the server
   */
  afterAll(async () => {
    await stopApp(server)
  });


 


  // The SuperTest request().method() chain returns a Promise. If the body of
  // a Jest test returns a Promise, the test will fail if the Promise rejects.
  // Thus we make sure to return the chain in each test.

  test("GET /api/events should return all events (mostly Jest)", async () => {
    // Here we use the built-in Jest matchers, like we used with React, et al.

    const response = await request(server).get("/api/events");

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );

    return response;
  });

  // SuperTest has several helpful methods for conveniently testing responses
  // that we can use to make the tests more concise
  // jest supports an optional argument to the test function that is a function to 
  // be called when the test is complete (to cope with asynchronous code)
  // supertest allows us to pass it in to the last expect to stop the test
  test("GET /api/events should return all events (mostly SuperTest)", (done) => {

    request(server)
      .get("/api/events")
      .expect(200)
      .expect("Content-Type", /json/);
  });

  test("PUT /api/events/:id should update the event (mostly SuperTest)", async () => {

    const newEvent = { ...sampleEvent, location: "KDR" };
    await request(server)
      .put(`/api/events/${newEvent.id}`)
      .send(newEvent)
      .expect(200)
      .expect("Content-Type", /json/);


  });


  test("GET /api/events/:id should return single event", (done) => {
    request(server)
      .get(`/api/events/${sampleEvent.id}`)
      .expect(200)
      .expect("Content-Type", /json/);
  


  });

test("POST /api/events should add new event (mostly SuperTest)", async () => {

    const sampleNewEvent = {
    "id": 46,
    "hobby": "Chess",
    "title": "2v2 Chess",
    "date": "5/4",
    "time": "2:45 PM",
    "location": "Axinn",
    "number_joined": 0,
    "max_number": 4
    };

    
    await request(server)
      .post(`/api/events`)
      .send(sampleNewEvent)
      .expect(200)
      .expect("Content-Type", /json/);

  });


  test("GET /api/groups should return all hobbies (mostly SuperTest)", (done) => {

    request(server)
      .get("/api/groups")
      .expect(200)
      .expect("Content-Type", /json/);
  });


  test("GET /api/profile/:id should return profile hobbies", (done) => {
    request(server)
      .get(`/api/profile/${sampleProfile.id}`)
      .expect(200)
      .expect("Content-Type", /json/);


  });


});