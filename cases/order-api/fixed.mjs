function finiteNumber(value, field, { integer = false, min = -Infinity } = {}) {
  const parsed = typeof value === "number" ? value : Number(String(value).trim());
  if (!Number.isFinite(parsed) || parsed < min || (integer && !Number.isInteger(parsed))) {
    throw new TypeError(`${field} is invalid`);
  }
  return parsed;
}

function strictBoolean(value, field) {
  if (value === true || value === "true") return true;
  if (value === false || value === "false") return false;
  throw new TypeError(`${field} is invalid`);
}

export function parseOrder(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) throw new TypeError("body is invalid");
  return {
    quantity: finiteNumber(body.quantity, "quantity", { integer: true, min: 1 }),
    total: finiteNumber(body.total, "total", { min: 0 }),
    expedited: strictBoolean(body.expedited, "expedited")
  };
}
