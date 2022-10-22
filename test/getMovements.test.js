const getMovements = require("../getMovements");

let data;

const fetchData = async () => {
  data = await getMovements();
};

beforeAll(fetchData);

test("Returns array", () => {
  expect(Array.isArray(data)).toBe(true);
});

test("Returns 10 movements", () => {
  expect(data.length).toBe(10);
});

test("All movements have importe, concepto", () => {
  expect(data.every((i) => "concepto" in i && "importe" in i)).toBe(true);
});
