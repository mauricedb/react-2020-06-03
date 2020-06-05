import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

let mockTime = "The time is: 12:09:05";
jest.mock("./components/Clock", () => () => mockTime);

beforeEach(() => {
  mockTime = "The time is: 12:09:05";
});
// jest.mock("./components/useTimer", () => () => new Date(2020, 1, 1, 12, 9, 5));

// jest
//   .spyOn(global.Date, "now")
//   .mockImplementation(() => new Date(2020, 1, 1, 12, 9, 5).getTime());

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.queryByText(/not there/i);
  expect(linkElement).not.toBeInTheDocument();

  expect(screen.getAllByText(/maurice/i)).toHaveLength(2);
});

test("renders learn react link", () => {
  render(<App />);

  expect(screen.getByText("The time is: 12:09:05")).toBeVisible();
});

test("renders learn react link", () => {
  mockTime = "The time is: 12:00:00";
  render(<App />);

  expect(screen.getByText("The time is: 12:00:00")).toBeVisible();
});
