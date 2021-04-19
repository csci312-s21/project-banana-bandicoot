/*
 Tests of our top-level component.
 */

import { render,  } from "@testing-library/react";

import Home from "../pages/index";



describe("MainSection Component", ()=> {
test("Smoke test", async () => {
  render(<Home />);

});

});

