import { render, screen } from "@testing-library/react";
import Header from "../Header";

// getBy => 如果只有 1 個回傳 pass / 1 個以上則回傳 error
test("should render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  // 標籤與 role 對照表 https://www.w3.org/TR/html-aria/#docconformance
  // { name: "value" } => value 為 aria-label 值, 如果沒有則 fallback 為 content
  // const headingElement = screen.getByRole("heading", { name: "my-aria-label" }); <Header /> 第8行開啟的話
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title props", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// findBy => getBy 非同步版本
test("should render same text passed into title props", async () => {
  render(<Header title="My Header" />);
  const headingElement = screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});