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


