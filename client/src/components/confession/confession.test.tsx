import { render, screen } from "@testing-library/react";
import { MisdeamnorFilterProvider } from "../hooks/filterMisdemeanourContext";
import ConfessionPage from "./confession";

describe("confession component", () => {
  it("displays form", () => {
    const { container } = render(
      <MisdeamnorFilterProvider>
        <ConfessionPage />
      </MisdeamnorFilterProvider>
    );
    expect(container.firstChild).toHaveClass("ConfessionForm");
  });

  it("render information about confessing", () => {
    render(
      <MisdeamnorFilterProvider>
        <ConfessionPage />
      </MisdeamnorFilterProvider>
    );

    const text = screen.getByText(
      /It's very difficult to catch people commiting misdemeanours so we appreciate it when citizens confess to us directly/i
    );
    expect(text).toBeInTheDocument();
  });

  it("render information about just talking to us", () => {
    render(
      <MisdeamnorFilterProvider>
        <ConfessionPage />
      </MisdeamnorFilterProvider>
    );

    const text = screen.getByText(
      /However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!/i
    );
    expect(text).toBeInTheDocument();
  });

  it("check if button is disabled", () => {
    render(
      <MisdeamnorFilterProvider>
        <ConfessionPage />
      </MisdeamnorFilterProvider>
    );

    expect(screen.getByText(/confess now/i).closest("button")).toBeDisabled();
  });
});
