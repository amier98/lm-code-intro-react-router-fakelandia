import { render, screen } from "@testing-library/react";
import { describe } from "vitest";

import MisdeamnorItem, { MisdeamenaorsProps } from "./misdeamnour-Item";

const props: MisdeamenaorsProps = {
  citizenId: 2332,
  misdemeanour: "united",
  date: "07/01/2024",
};

const props2: MisdeamenaorsProps = {
  citizenId: 117,
  misdemeanour: "vegetables",
  date: "08/01/2024",
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

  it("render misdeamnour second date on page", () => {
    render(<MisdeamnorItem {...props2} />);
    const text = screen.getByText("08/01/2024");
    expect(text).toBeInTheDocument();
  });

  it("render misdeamnour second citizen id on page", () => {
    render(<MisdeamnorItem {...props2} />);
    const text = screen.getByText("117");
    expect(text).toBeInTheDocument();
  });
});
