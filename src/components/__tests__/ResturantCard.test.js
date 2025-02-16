import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import RestaurantCard from "../RestaurantCard"
import resCardMock from "../../components/MockData/resCardMock.json"


it("should render restaurantCard component with props Data", () => {
    render(<RestaurantCard resData={resCardMock}/>)

    const name =screen.getByText("Pizza Hut")

    expect(name).toBeInTheDocument();
})
