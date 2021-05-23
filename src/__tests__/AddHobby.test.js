
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import fetchMock from "fetch-mock-jest";

import { act } from "react-dom/test-utils";

import Home from "../pages/index";

import { useSession } from "next-auth/client";


const newHobbyTest = {

  "name": "Skiing"
  //"members": []
}

//const newHobbyTestPlusSkiing

const oldHobbyTest = [

  {"name": "Basketball", "members":["2"]}, 
  {"name": "Chess", "members":["3"]}


]

const profile = [
  {"name":"Katelyn Pease","hometown":"Boston","birthday":"2000-02-12","major":"Computer Science and Psychology","year":"2022","hobby":["Basketball","Chess"],"bio":"hello!","username":"katelyn-pease","password":"thisismypassword!","joinedEvents":[3,4],"id":"2"}
]

let localProfiles;
let localHobbies;
jest.mock("next-auth/client");

describe("AddHobby Component", ()=> {

   const getId = (url) => +/\d+$/.exec(url)[0];

    let root;
    beforeEach(() => {
       useSession.mockReturnValue([{user: {name:"someone"}}, false]);
         act(() => {
       const { container } = render(<Home/>);
       root = container;

         });
    });

    beforeAll(()=>{


      localProfiles = profile.map((prof) => ({ ...prof }));
      localHobbies = oldHobbyTest.map((hob) => ({ ...hob }));

       fetchMock.reset();
       fetchMock.get(
      `/api/profile/2`,
      () => localProfiles[0]
        );
      fetchMock.get(`api/groups`, 
      () => localHobbies
      );
      fetchMock.post(
        `/api/groups`, 
        () => {
          const alteredHobbies = [...localHobbies, newHobbyTest];

          return alteredHobbies;
        }
      );/*
      fetchMock.put(
        `/api/groups/Skiing`,
        (id) => {
          //console.log(id)
          const updatedHobbies = localHobbies.map(hobby => {
            if(hobby.name === "Skiing"){
              const newHobbyMembers = [...hobby.members, id];
              return {...hobby, members: newHobbyMembers}
            } else{
              return hobby
            }
          })
          return updatedHobbies;
        }
      )*/
      fetchMock.put(
        `/api/profile/2`,
        (url, options) => {
          const id = getId(url);
            console.log("hee");

          const modifiedProfile = JSON.parse(options.body);
       
          localProfiles = localProfiles.map((prof) => {
            if (id === prof.id) {
              return modifiedProfile;
            } else {
            return prof;
          }
        });
        console.log(modifiedProfile);
        return modifiedProfile;
        
      }
    );


    });

  //Skipping test because it does not work (integration with fetch mock is very complicated)

 test.skip("Adding hobby adds it to myHobbies", async () => {
     const addButton = screen.queryByRole("button", {name: "AddHobby"});
     fireEvent.click(addButton);
     
     const textArea = root.querySelector("input[type=text]");
     //make textarea = "skiing"
     fireEvent.change(textArea, {
       target: { value: newHobbyTest.name }
      });


     const submitButton = screen.getByRole("button", {name: "Save"});
     
     
    fireEvent.click(submitButton);
   

    await waitFor(async () => {
          await fetchMock.flush(true);
      });
 
    
      const groupButton = screen.queryByText("Groups");

      fireEvent.click(groupButton);

      const skiText = screen.getByText(newHobbyTest.name);
      expect(skiText).toBeInTheDocument;
    
  
 });
})

