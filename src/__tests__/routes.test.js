import path from "path";
import request from "supertest";
import {
  startApp,
  stopApp,
  nextBuild,
  nextServer,
} from "../test-utils/next-test-utils";


import { readData, resetData } from "../lib/backend-utils";

jest.setTimeout(1000 * 10);

describe("Hobby Buddy API", () => {
  let server;
  let events;
  let sampleEvent;

  beforeAll(async () => {
    const appDir = path.join(__dirname, "../../");
    await nextBuild(appDir);

    const app = nextServer({
      dir: appDir,
      dev: false,
      quiet: true,
    });

    server = await startApp(app);
  });

  beforeEach(async () => {
    resetData();

    events = readData();
    sampleEvent = events[Math.floor(events.length / 2)];
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

    const response = await request(server)
      .get("/api/films");

    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );

    expect(response.body).toEqual(films);

    return response;
  });

  // SuperTest has several helpful methods for conveniently testing responses
  // that we can use to make the tests more concise
  // jest supports an optional argument to the test function that is a function to 
  // be called when the test is complete (to cope with asynchronous code)
  // supertest allows us to pass it in to the last expect to stop the test
  test("GET /api/films should return all films (mostly SuperTest)", (done) => {

    request(server)
      .get("/api/films")
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(films, done);
  });

  test("PUT /api/films/:id should update the film (mostly SuperTest)", async () => {

    const newFilm = { ...sampleFilm, rating: 4 };
    await request(server)
      .put(`/api/films/${newFilm.id}`)
      .send(newFilm)
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(newFilm);


    const updatedFilms = readData();
    const testFilm = updatedFilms.find((f) => f.id === newFilm.id);
    expect(testFilm).toEqual(newFilm);
  });

  // TODO: Add a test for GET /api/films/:id
  test("GET /api/films/:id should return single film", (done) => {
    request(server)
      .get(`/api/films/${sampleFilm.id}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(sampleFilm, done);


  });
});