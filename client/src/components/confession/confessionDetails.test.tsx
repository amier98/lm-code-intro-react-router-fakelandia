import { render, screen } from "@testing-library/react";
import ConfessionDetails from "./confessionDetails";
import ConfessionPage from "./confession";
import userEvent from "@testing-library/user-event";

describe("confessionDetail", () => {
  it("renders confession details input", () => {
    const confessionDetailsProps = {
      confessionDetails:
        "We want to see if this works and make a fake confession",
      onChangeConfessionDetail: () => {},
    };
    render(<ConfessionDetails {...confessionDetailsProps} />);
    const text = screen.getByText(
      "We want to see if this works and make a fake confession"
    );
    expect(text).toHaveValue();
  });

  test("when the value has been changed, call onChange function", async () => {
    const handleChange = vi.fn();

    const confessionDetailProps = {
      confessionDetails:
        "I was a big fan of doctor who but I have stopped watching it.",
      onChangeConfessionDetail: handleChange,
    };

    render(<ConfessionDetails {...confessionDetailProps} />);
    const input = screen.getByText(
      "I was a big fan of doctor who but I have stopped watching it."
    );

    await userEvent.type(
      input,
      "I was a big fan of doctor who but I have stopped watching it."
    );
    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(61);
  });
});
