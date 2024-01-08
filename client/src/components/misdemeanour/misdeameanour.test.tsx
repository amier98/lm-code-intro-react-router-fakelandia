import { render, screen } from "@testing-library/react";
import Misdeamenaors from "./misdeameanour";

import { describe } from "vitest";

import { beforeAll, afterAll } from "vitest";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import MisdeamnorItem, { MisdeamenaorsProps } from "./misdeamnour-Item";
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
const server = setupServer();

const props: MisdeamenaorsProps = {
  citizenId: 2332,
  misdemeanour: "united",
  date: "07/01/2024",
};
describe("context for misdeamneour", () => {
  it("render misdemeanour on page", () => {
    render(<MisdeamnorItem {...props} />);
    const text = screen.getByText("😈united");
    expect(text).toBeInTheDocument();
  });

  it("render citizen Id on page", () => {
    render(<MisdeamnorItem {...props} />);
    const text = screen.getByText("2332");
    expect(text).toBeInTheDocument();
  });

  it("render misdeamnour date on page", () => {
    render(<MisdeamnorItem {...props} />);
    const text = screen.getByText("07/01/2024");
    expect(text).toBeInTheDocument();
  });
});
