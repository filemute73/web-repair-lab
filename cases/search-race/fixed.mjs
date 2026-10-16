export function createSearch(fetchResults, render) {
  let latestRequest = 0;
  return async function search(query) {
    const request = ++latestRequest;
    const results = await fetchResults(query);
    if (request !== latestRequest) return { discarded: true };
    render(results);
    return { discarded: false };
  };
}
