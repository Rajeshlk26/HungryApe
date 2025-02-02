import {render, screen} from "@testing-library/react";
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contant Us page test case", () => {

// can use test/it for testing

it("should load Contant us component", () => {
    render(<Contact />);


    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
})


it("should load button inside Contant us component", () => {
    render(<Contact />);


    const button = screen.getByRole("button");

    //Assertion
    expect(button).toBeInTheDocument();
})

it("check submit form in Contant us component", () => {
    render(<Contact />);


    const submit = screen.getByText("Submit");

    //Assertion
    expect(submit).toBeInTheDocument();
})

it("should load input name inside Contant us component", () => {
    render(<Contact />);


    const inputName = screen.getByPlaceholderText("Name");

    //Assertion
    expect(inputName).toBeInTheDocument();
})

});
