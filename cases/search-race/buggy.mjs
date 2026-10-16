export function createSearch(fetchResults, render) {
  return async function search(query) {
    const results = await fetchResults(query);
    render(results);
  };
}
