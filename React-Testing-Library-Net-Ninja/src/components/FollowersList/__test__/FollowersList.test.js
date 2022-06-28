import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowerList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowerList />
    </BrowserRouter>
  );
};

describe("AddInput", () => {
  test("should renders follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId("follower-item-0");

    expect(followerDivElement).toBeInTheDocument();
  });

  test("should render multiple follower items", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findAllByTestId(/follower-item/i);

    expect(followerDivElement.length).toBe(5);
  });
});
