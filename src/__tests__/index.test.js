/*
 Tests of our top-level component.
 */

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import fetchMock from "fetch-mock-jest";
import { act } from "react-dom/test-utils";

import Home from "../pages/index";



describe("MainSection Component", ()=> {
test("Smoke test", async () => {
  render(<Home />);

});

});


})


