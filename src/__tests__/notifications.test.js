/* eslint-disable */

import { render, screen } from "@testing-library/react";

import fetchMock from "fetch-mock-jest";

import { act } from "react-dom/test-utils";

import Notifications from "../pages/Notifications";

import { useSession } from "next-auth/client";


const eventTests = [{"id":1,
"hobby":"Chess",
"title":"Chess Tournament!",
"date":"5/2","time":"10:45 AM",
"location":"DANA Auditorium",
"number_joined":1,
"max_number":12, "edited":"2021-05-12T23:40:41.352Z"},

{"id":2,
"hobby":"Chess",
"title":"Chess Club Practice, bring friends",
"date":"4/8","time":"6:45 PM",
"location":"Wilson Cafe",
"number_joined":3,"max_number":8,"edited": Date.now()
}]

const profile = [
  {"name":"Katelyn Pease","hometown":"Boston","birthday":"2000-02-12","major":"Computer Science and Psychology","year":"2022","hobby":["Basketball","Chess"],"bio":"hello!","username":"katelyn-pease","password":"thisismypassword!","joinedEvents":[3,4],"id":2}
]

let localProfiles;
jest.mock("next-auth/client");

describe("notifications Component", ()=> {


    let root;
    beforeEach(() => {
       useSession.mockReturnValue([{user: {name:"someone"}}, false]);
         act(() => {
       const { container } = render(<Notifications/>);

         });
    });

    beforeAll(()=>{

      localProfiles = profile.map((prof) => ({ ...prof }));

       fetchMock.reset();
       fetchMock.get(
      `/api/profile/2`,
      () => localProfiles[0]
    );
       fetchMock.get(
      `/api/events`,
      () => eventTests
    );

    });

  //Starting at Profile may not work if we have a real program with a backend
 test("Notifications only displays user events created within 2 hours of current time.", async () => {

      expect(screen.queryByText(eventTests[0])).not.toBeInTheDocument;
      expect(screen.queryByText(eventTests[1])).toBeInTheDocument;
    
  
 });

})