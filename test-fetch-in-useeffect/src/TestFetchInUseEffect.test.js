import { render, screen, waitFor, act } from "@testing-library/react";
import TestFetchInUseEffect from "./TestFetchInUseEffect";
import { fetchAPI as mockFetchAPI } from "./testFetch";

jest.mock("./testFetch");

describe("TestFetchInUseEffect", () => {
  it("test fetch in useEffect", async () => {
    // console.log("mockFetchAPI", mockFetchAPI);

    mockFetchAPI.mockResolvedValue([
      {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
      },
    ]);

    act(() => {
      render(<TestFetchInUseEffect />);
    });

    await waitFor(() => {
      expect(screen.getByTestId('delectus aut autem')).toBeInTheDocument()
      screen.debug() // 斷言後使用才會出現正確 DOM => 須調研原因
    });
  });
});
