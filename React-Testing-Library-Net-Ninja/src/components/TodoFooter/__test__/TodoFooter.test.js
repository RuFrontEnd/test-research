import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => (
  <BrowserRouter>
    <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
  </BrowserRouter>
);

test("should render the correct ammount of incomplete tasks", () => {
  render(<MockTodoFooter numberOfIncompleteTasks={5} />);
  const paragraphElement = screen.getByText(/5 tasks left/i);
  // 以下為 assertions 
  expect(paragraphElement).toBeInTheDocument();
  expect(paragraphElement).toBeTruthy();
  expect(paragraphElement).not.toBeFalsy();
  expect(paragraphElement).toBeVisible(); // 用於判斷該 element 的 opcaity /visiblity / display 值
  expect(paragraphElement.value).toBe(1);
});
