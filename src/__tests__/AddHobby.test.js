import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Home from "../pages/Profile";

import MenuBar from "../components/MenuBar";

import data from "../../data/hobbies.json";

const allHobbies = [
  {
    "name": "Basketball"
  },
  {
    "name": "Chess"
  }
]

const newHobbyTest = {
  name: "Waterpolo"
 }


describe("AddHobby Component", ()=> {

    let root;
    beforeEach(() => {
       const { container } = render(<Home/>);
       root = container;
    });

  //Starting at Profile may not work if we have a real program with a backend
 test("Adding hobby adds it to myHobbies", async () => {
     let addButton = screen.queryByRole('button', {name: "AddHobby"});
     fireEvent.click(addButton);
     
     let textArea = root.querySelector("input[type=text]");
     //make textarea = "skiing"
     fireEvent.change(textArea, {
       target: { value: newHobbyTest.name }
      });

     let submitButton = screen.getByRole('button', {name: "Create New Hobby"});
     fireEvent.click(submitButton);
    
      let groupButton = screen.getByText("Groups");
      fireEvent.click(groupButton);
      let skiText = screen.getByText(newHobbyTest.name);
      expect(skiText).toBeInTheDocument;
    
  
 });
})