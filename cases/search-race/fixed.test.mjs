import test from "node:test";
import assert from "node:assert/strict";
import { createSearch } from "./fixed.mjs";

test("prevents an older response from overwriting the latest search", async () => {
  const pending = new Map();
  const fetchResults = query => new Promise(resolve => pending.set(query, resolve));
  const renders = [];
  const search = createSearch(fetchResults, value => renders.push(value));
  const oldRequest = search("old");
  const newRequest = search("new");
  pending.get("new")(["new result"]);
  await newRequest;
  pending.get("old")(["stale result"]);
  const oldOutcome = await oldRequest;
  assert.deepEqual(renders, [["new result"]]);
  assert.equal(oldOutcome.discarded, true);
});
