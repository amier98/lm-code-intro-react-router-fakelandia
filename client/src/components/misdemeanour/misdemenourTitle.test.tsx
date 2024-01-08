import { render, screen } from "@testing-library/react";
import MisdeamenaorTitle from "./misdemenourTitle";
import { MisdeamnorFilterProvider } from "../hooks/filterMisdemeanourContext";

describe("context for misdeamneour", () => {
  it("render misdemeanour on page", () => {
    render(
      <MisdeamnorFilterProvider>
        <MisdeamenaorTitle />
      </MisdeamnorFilterProvider>
    );
    const text = screen.getByText("Citizen ID");
    expect(text).toBeInTheDocument();
  });

  it("render misdemeanour on page", () => {
    render(
      <MisdeamnorFilterProvider>
        <MisdeamenaorTitle />
      </MisdeamnorFilterProvider>
    );
    const text = screen.getByText("Date");
    expect(text).toBeInTheDocument();
  });

  it("render misdemeanour on page", () => {
    render(
      <MisdeamnorFilterProvider>
        <MisdeamenaorTitle />
      </MisdeamnorFilterProvider>
    );
    const text = screen.getByText("Misdemeanour");
    expect(text).toBeInTheDocument();
  });

  it("render misdemeanour on page", () => {
    render(
      <MisdeamnorFilterProvider>
        <MisdeamenaorTitle />
      </MisdeamnorFilterProvider>
    );
    const text = screen.getByText("Punishment Idea");
    expect(text).toBeInTheDocument();
  });
});
