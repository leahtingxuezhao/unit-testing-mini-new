import { add } from "../utils/functions";

test("add returns the sum of two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("add handles string inputs that are numbers", () => {
  expect(add("1", "2")).toBe(3);
});

test("add returns NaN if non numbers are passed", () => {
  expect(add("hello", 3)).toBe(NaN);
});
