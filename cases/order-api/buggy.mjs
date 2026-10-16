export function parseOrder(body) {
  return {
    quantity: Number(body.quantity),
    total: Number(body.total),
    expedited: Boolean(body.expedited)
  };
}
