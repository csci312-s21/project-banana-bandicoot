/*
 Tests of our top-level component.
 */

/*
 Tests of our top-level component.
 */

import { render  } from "@testing-library/react";
import { useSession } from "next-auth/client";

import Home from "../pages/index";

jest.mock("next-auth/client");

describe("MainSection Component", ()=> {
test("Smoke test", async () => {
  useSession.mockReturnValue([{user: {name:"someone"}}, false]);
  render(<Home />);

});


});

describe("MenuBar Component", () => {
  test.skip("toggling icon shows menu when page is less than 800px in width", () =>{

  });

  test.skip("toggling icon hides menu when page is less than 800px in width", () =>{

  });

  test.skip("menu automatically shows when page is greater than 800px in width", () =>{

  });

  test.skip("menu cannot be toggled off when page is greater than 800px", () =>{

  });
  

  test.skip("selecting menu item rerenders to corresponding page", () =>{

  });
  
  test.skip("toggling group dropdown renders user hobbies", () =>{

  });

  
  test.skip("toggling menu item dropdown flips dropdown icon", () =>{

  });

  test.skip("selecting hobby from group dropdown renders to corresponding page", () =>{

  });




})




/*
 Tests of our top-level component.

 Because of the way that Next.js works, we can't leave a test file in the 
 'pages' directory, so we need to relocate it somewhere else.
 */



/*
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Simplepedia from "../pages/index";

import data from "../../data/seed.json";


describe("MainSection Component", ()=> {
test("Smoke test", async () => {
  render(<Home />);

});

});

const newEvent = {
    id: "1",
    hobby: "chess",
    title: "Chess Tournament!",
    time: "2016-12-07T23:22:33.357Z",
    location: "DANA Auditorium",
    number_joined: 1,
    max_number: 12
};

const selectArticle = async (event) => {
  const section = screen.getByText(event.title[0].toUpperCase());
  fireEvent.click(section);

  const title = await screen.findByText(event.title);
  fireEvent.click(title);
  await screen.findByText(event.time);
};

describe("Top level integration tests", () => {
  let root;
  beforeEach(() => {
    const { container } = render(<Simplepedia />);
    root = container;
  });


  describe("Create functionality tests", () => {
    const createNewEvent = () => {
      const button = screen.queryByRole("button", { name: "addEvent" });
      fireEvent.click(button);
      const titleEditor = root.querySelector("input[type=text");
      const contentsEditor = root.querySelector("textarea");

      fireEvent.change(titleEditor, {
        target: { value: newArticle.title },
      });
      fireEvent.change(contentsEditor, {
        target: { value: newArticle.contents },
      });
    };

    test("Saving added event shows new event", async () => {
      createNewEvent();
      const save = screen.queryByRole("button", { name: "Save" });
      fireEvent.click(save);

      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "Cancel" })
        ).not.toBeInTheDocument();
      });

      expect(screen.getAllByText(newArticle.title)).toHaveLength(2);
    });

    test("Saving added event adds event to collection", async () => {
      createNewArticle();
      const save = screen.queryByRole("button", { name: "Save" });
      fireEvent.click(save);

      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "Cancel" })
        ).not.toBeInTheDocument();
      });

      await selectArticle(data[2]);

      await selectArticle(newArticle);
      expect(screen.getAllByText(newArticle.title)).toHaveLength(2);
    });

  });
  });
});

*/



/*
 Tests of our top-level component.

 Because of the way that Next.js works, we can't leave a test file in the 
 'pages' directory, so we need to relocate it somewhere else.
 */



/*
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Simplepedia from "../pages/index";

import data from "../../data/seed.json";


describe("MainSection Component", ()=> {
test("Smoke test", async () => {
  render(<Home />);

});

});

const newEvent = {
    id: "1",
    hobby: "chess",
    title: "Chess Tournament!",
    time: "2016-12-07T23:22:33.357Z",
    location: "DANA Auditorium",
    number_joined: 1,
    max_number: 12
};

const selectArticle = async (event) => {
  const section = screen.getByText(event.title[0].toUpperCase());
  fireEvent.click(section);

  const title = await screen.findByText(event.title);
  fireEvent.click(title);
  await screen.findByText(event.time);
};

describe("Top level integration tests", () => {
  let root;
  beforeEach(() => {
    const { container } = render(<Simplepedia />);
    root = container;
  });


  describe("Create functionality tests", () => {
    const createNewEvent = () => {
      const button = screen.queryByRole("button", { name: "addEvent" });
      fireEvent.click(button);
      const titleEditor = root.querySelector("input[type=text");
      const contentsEditor = root.querySelector("textarea");

      fireEvent.change(titleEditor, {
        target: { value: newArticle.title },
      });
      fireEvent.change(contentsEditor, {
        target: { value: newArticle.contents },
      });
    };

    test("Saving added event shows new event", async () => {
      createNewEvent();
      const save = screen.queryByRole("button", { name: "Save" });
      fireEvent.click(save);

      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "Cancel" })
        ).not.toBeInTheDocument();
      });

      expect(screen.getAllByText(newArticle.title)).toHaveLength(2);
    });

    test("Saving added event adds event to collection", async () => {
      createNewArticle();
      const save = screen.queryByRole("button", { name: "Save" });
      fireEvent.click(save);

      await waitFor(() => {
        expect(
          screen.queryByRole("button", { name: "Cancel" })
        ).not.toBeInTheDocument();
      });

      await selectArticle(data[2]);

      await selectArticle(newArticle);
      expect(screen.getAllByText(newArticle.title)).toHaveLength(2);
    });

  });
  });
});

*/
