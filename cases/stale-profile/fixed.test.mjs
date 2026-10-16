import test from "node:test";
import assert from "node:assert/strict";
import { ProfileStore } from "./fixed.mjs";

test("publishes a new profile reference after an update", () => {
  const original = { name: "Mina", city: "London" };
  const store = new ProfileStore(original);
  let published;
  store.subscribe(value => { published = value; });
  const updated = store.update({ city: "Madrid" });
  assert.notEqual(updated, original);
  assert.equal(published.city, "Madrid");
  assert.equal(original.city, "London");
});
