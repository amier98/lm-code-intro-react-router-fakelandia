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
  citizenId: 2849,
  misdemeanour: "united",
  date: "07/01/2024",
};
describe("context for misdeamneour", () => {
  //   it("GET misdeamnour list", async () => {
  //     // server.use(
  //     //   http.get("http://localhost:8080/api/misdemeanours/3", () => {
  //     //     return new HttpResponse(
  //     //       JSON.stringify({
  //     //         citizenId: 6563,
  //     //         date: "07/01/2024",
  //     //         misdemeanour: "united",
  //     //       }),
  //     //       {
  //     //         headers: {
  //     //           "Content-Type": "application/json",
  //     //         },
  //     //       }
  //     //     );
  //     //   })
  //     // );
  //     render(<MisdeamnorItem {...props} />);

  //     const text = await screen.findByText("07/01/2024");
  //     expect(text).toBeInTheDocument();
  //   });
  it("render misdemeanour on page", () => {
    render(<MisdeamnorItem {...props} />);
    const text = screen.getByText("😈united");
    expect(text).toBeInTheDocument();
  });
  it("renders page when loaded", () => {
    render(<Misdeamenaors />);
    const text = screen.getByText("Citizen ID");
    expect(text).toBeInTheDocument();
    const title2 = screen.getByText("Date");
    expect(title2).toBeInTheDocument();
  });
});
