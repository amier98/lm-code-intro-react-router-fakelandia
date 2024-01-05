import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "./homePage";
describe("App", () => {
  it("has the title for homepage", () => {
    render(<HomePage />);
    const text = screen.getByText(
      /Welcome to the home of the Justice Department of Fakelandia/i
    );
    expect(text).toBeInTheDocument();
  });
});
