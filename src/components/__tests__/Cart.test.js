import { fireEvent, screen, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Mock_data from "../MockData/MockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header"
import Cart from "../Cart"

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(Mock_data),
  })
);

it("should load restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordianHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20)

  const addBtns =screen.getAllByRole("button", {name: "Add+"})

  fireEvent.click(addBtns[0])

  expect(screen.getByText("Cart - (1)")).toBeInTheDocument();
});
