import { render, screen } from "@testing-library/react";

import { MisdeamnorFilterProvider } from "../hooks/filterMisdemeanourContext";
import MisdeamnorFilter from "./misdemeanourFilter";
import userEvent from "@testing-library/user-event";

describe("dropdown for misdemeanour", () => {
  it("correct amount of options", () => {
    render(
      <MisdeamnorFilterProvider>
        <MisdeamnorFilter />
      </MisdeamnorFilterProvider>
    );

    expect(screen.getAllByRole("option").length).toBe(5);
  });
});
