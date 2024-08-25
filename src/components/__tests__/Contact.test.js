import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });
  // beforeEach(() => {
  //   console.log("Before Each");
  // });
  // afterAll(() => {
  //   console.log("After All");
  // });
  // afterEach(() => {
  //   console.log("After Each");
  // });
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");
    //Or
    //const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("should load input box for the name inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("name");
    expect(input).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contact us component", () => {
    render(<Contact />);
    //Querying
    const inputBoxes = screen.getAllByRole("textbox");
    //console.log(inputBoxes);
    expect(inputBoxes.length).toBe(2);
  });
});
