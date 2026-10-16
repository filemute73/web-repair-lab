import test from "node:test";
import assert from "node:assert/strict";
import { parseOrder } from "./fixed.mjs";

test("does not coerce the string false to true", () => {
  assert.deepEqual(parseOrder({ quantity: "2", total: "19.95", expedited: "false" }), {
    quantity: 2, total: 19.95, expedited: false
  });
});

test("rejects malformed numeric input", () => {
  assert.throws(() => parseOrder({ quantity: "two", total: 10, expedited: false }), /quantity/);
  assert.throws(() => parseOrder({ quantity: 1, total: "NaN", expedited: false }), /total/);
});
