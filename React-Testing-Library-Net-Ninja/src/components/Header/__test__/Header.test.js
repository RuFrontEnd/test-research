import { render, screen } from "@testing-library/react";
import Header from "../Header";

// GET BY => 如果只有 1 個回傳 pass / 1 個以上則回傳 error
test("should render same text passed into title props (getByText)", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title props (getByRole)", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading", { name: "My Header" });
  // 標籤與 role 對照表 https://www.w3.org/TR/html-aria/#docconformance
  // { name: "value" } => value 為 aria-label 值, 如果沒有則 fallback 為 content
  // const headingElement = screen.getByRole("heading", { name: "my-aria-label" }); <Header /> 第8行開啟的話
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title props (getByTitle)", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTitle("Header");
  expect(headingElement).toBeInTheDocument();
});

test("should render same text passed into title props (getByTestId)", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByTestId("header-1");
  expect(headingElement).toBeInTheDocument();
});

// FIND BY => getBy 非同步版本
test("should render same text passed into title props (findByText)", async () => {
  render(<Header title="My Header" />);
  const headingElement = await screen.findByText(/my header/i);
  expect(headingElement).toBeInTheDocument();
});

// QUERY BY => 找不到時回傳 null (非立即報錯), 用於測試值是不是 "沒有出現"
test("should render same text passed into title props (queryByText)", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.queryByText(/dogs/i);
  expect(headingElement).not.toBeInTheDocument();
});

// GET ALL BY => 選到所有符合者
test("should render same text passed into title props (getAllByRole)", () => {
  render(<Header title="My Header" />);
  const headingElements = screen.getAllByRole("heading");
  expect(headingElements.length).toBe(2);
});
