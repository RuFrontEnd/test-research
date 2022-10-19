import { render, screen, waitFor, act } from "@testing-library/react";
import TestFetchInUseEffect from "./TestFetchInUseEffect";
import { fetchAPI as mockFetchAPI } from "./testFetch";

jest.mock("./testFetch");

const mockResolvedValue = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 3,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

describe("TestFetchInUseEffect", () => {
  it("should render loading... using getBy", () => {
    mockFetchAPI.mockResolvedValue(mockResolvedValue);

    render(<TestFetchInUseEffect />);

    expect(screen.getByText("loading...")).toBeInTheDocument();
  });

  it("should render 'delectus aut autem' using findBy and await for getBy", async () => {
    mockFetchAPI.mockResolvedValue(mockResolvedValue);

    render(<TestFetchInUseEffect />);

    await waitFor(() => {
      expect(
        screen.getByTestId(mockResolvedValue[0].title)
      ).toBeInTheDocument();
    });

    // 上下等價

    expect(
      await screen.findByTestId(mockResolvedValue[0].title)
    ).toBeInTheDocument();
  });

  it("should not render loading... after using findby(or wait for)", async () => {
    mockFetchAPI.mockResolvedValue(mockResolvedValue);

    render(<TestFetchInUseEffect />);

    expect(
      await screen.findByTestId(mockResolvedValue[0].title)
    ).toBeInTheDocument();

    // 上下等價

    // await waitFor(() => {
    //   expect(
    //     screen.getByTestId(mockResolvedValue[0].title)
    //   ).toBeInTheDocument();
    // });

    expect(screen.queryByText("loading...")).not.toBeInTheDocument();
  });
});
