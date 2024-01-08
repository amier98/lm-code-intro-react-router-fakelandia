import { render, screen } from "@testing-library/react";
import ConfessionSubject from "./confessionSubject";
import userEvent from "@testing-library/user-event";

describe("confessionSubject", () => {
  it("render confessionSubject input", () => {
    const confessionSubjectProps = {
      confessionSubject: "",
      onChangeConfessionSubject: () => {},
    };

    render(<ConfessionSubject {...confessionSubjectProps} />);
    const text = screen.getByLabelText("Subject:");
    expect(text).toBeInTheDocument();
  });

  it("when value changes, onChange should be called", async () => {
    const handleChange = vi.fn();

    const confessionSubjectProps = {
      confessionSubject: "",
      onChangeConfessionSubject: handleChange,
    };
    render(<ConfessionSubject {...confessionSubjectProps} />);

    const input = screen.getByLabelText("Subject:");

    await userEvent.type(input, "Fake Confession Subject");

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(23);
  });
});
