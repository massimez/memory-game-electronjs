export function fetchResults() {
  const data = localStorage.getItem('results');
  if (!data) return [];
  return JSON.parse(data);
}
export function addItems(item) {
  localStorage.setItem('results', JSON.stringify([{
    name: state.userName,
    result,
  }, ...results]));
}
