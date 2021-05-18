import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import fetchMock from "fetch-mock-jest";

import { act } from "react-dom/test-utils";

import Home from "../pages/index";

import MenuBar from "../components/MenuBar";

import data from "../../data/hobbies.json";

import { useSession } from "next-auth/client";

const allHobbies = [
  {
    "name": "Basketball"
  },
  {
    "name": "Chess"
  }
]

const newHobbyTest = {

  "name": "Skiing"
}

const profile = [
  {"name":"Katelyn Pease","hometown":"Boston","birthday":"2000-02-12","major":"Computer Science and Psychology","year":"2022","hobby":["Basketball","Chess"],"bio":"hello!","username":"katelyn-pease","password":"thisismypassword!","joinedEvents":[3,4],"id":2}
]

let localHobbies;
let localProfiles;
jest.mock("next-auth/client");

describe("AddHobby Component", ()=> {

   const getId = (url) => +/\d+$/.exec(url)[0];
  let localFilms;


    let root;
    beforeEach(() => {
       useSession.mockReturnValue([{user: {name:"someone"}}, false]);
         act(() => {
       const { container } = render(<Home/>);
       root = container;

         });
    });

    beforeAll(()=>{

      localHobbies = allHobbies.map((hobby) => ({ ...hobby }));

      localProfiles = profile.map((prof) => ({ ...prof }));

       fetchMock.reset();
       fetchMock.get(
      `/api/profile/2`,
      () => localProfiles[1]
    );
    fetchMock.put(
      `/api/profile/2`,
      (url, options) => {
        const id = getId(url);

        const modifiedProfile = JSON.parse(options.body);
       
        localProfiles = localProfiles.map((prof) => {
          if (id === prof.id) {
            return modifiedProfile;
          } else {
            return prof;
          }
        });
        return modifiedProfile;
      }
    );


    });

  //Starting at Profile may not work if we have a real program with a backend
 test("Adding hobby adds it to myHobbies", async () => {
     const addButton = screen.queryByRole("button", {name: "AddHobby"});
     fireEvent.click(addButton);
     
     const textArea = root.querySelector("input[type=text]");
     //make textarea = "skiing"
     fireEvent.change(textArea, {
       target: { value: newHobbyTest.name }
      });


     const submitButton = screen.getByRole("button", {name: "Save"});
     
     
    fireEvent.click(submitButton);
    

    await waitFor(() => {expect(localHobbies.toContain(newHobbyTest.name));

    });

  //  act(() => {
  //    expect(newHobbyTest.name).toBeInTheDocument;

  //   });
   

    // await waitFor(async () => {
    //     await fetchMock.flush(true);
    //    });
 
    
      // let groupButton = screen.queryByText("Groups");

      // fireEvent.click(groupButton);
      // let skiText = screen.getByText(newHobbyTest.name);
      // expect(skiText).toBeInTheDocument;
    
  
 });
})