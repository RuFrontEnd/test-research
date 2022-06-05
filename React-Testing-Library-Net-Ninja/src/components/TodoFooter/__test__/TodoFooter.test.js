import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

// describe block
describe("TodoFooter", () => {
  const regex = /5 tasks left/i;
  const numberOfIncompleteTasks = 5

  describe("document type", () => {
    test("should render the correct ammount of incomplete tasks (document type)", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />);
      const paragraphElement = screen.getByText(regex);
      // 以下為 assertions
      expect(paragraphElement).toBeInTheDocument();
      expect(paragraphElement).toBeVisible(); // 用於判斷該 element 的 opcaity /visiblity / display 值
    });
  });

  describe("true or false", () => {
    test("should render the correct ammount of incomplete tasks (true or false)", () => {
      render(<MockTodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />);
      const paragraphElement = screen.getByText(regex);
      expect(paragraphElement).toBeTruthy();
      expect(paragraphElement).not.toBeFalsy();
    });
  });
});
