const { render, screen } = require("@testing-library/react");
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Should load contact us component", () => {
  it("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact us component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Should render input", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  it("Should load two input components", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});
