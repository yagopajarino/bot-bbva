const helpers = require("../helpers");
const isEqual = helpers.isEqual;

test("Two equal objects", () => {
  const one = { a: 1, b: 2, c: 3 };

  const other = { a: 1, b: 2, c: 3 };

  expect(isEqual(one, other)).toBe(true);
});

test("One object empty", () => {
  const one = {};

  const other = { a: 1, b: 2, c: 3 };

  expect(isEqual(one, other)).toBe(false);
});

test("Both empty", () => {
  const one = {};

  const other = {};

  expect(isEqual(one, other)).toBe(true);
});

test("Different  values", () => {
  const one = { a: 1, b: 2, c: 3 };

  const other = { a: 2, b: 2, c: 3 };

  expect(isEqual(one, other)).toBe(false);
});

test("Different  keys", () => {
  const one = { a: 1, b: 2, c: 3 };

  const other = { z: 1, b: 2, c: 3 };

  expect(isEqual(one, other)).toBe(false);
});
