import { Provider } from "react-redux";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore"
import {fireEvent,render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"

it("should render header component with login button", () => {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>)

    const loginButton = screen.getByRole("button", {name: "Login"})
    // const loginButton = screen.getByText("Login")

    expect(loginButton).toBeInTheDocument();
})

it("should render header component with a cart items", () => {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>)

    const cartItems = screen.getByText(/Cart/)

    expect(cartItems).toBeInTheDocument();
})

it("should render header component login button to logout on click", () => {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>)

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})


    expect(loginButton).toBeInTheDocument(logoutButton);
})