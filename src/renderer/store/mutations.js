export default {
  setResult(state, result) {
    const results = fetchResults();
    localStorage.setItem('results', JSON.stringify([{
      name: state.userName,
      result,
    }, ...results]));
    state.results.push({
      name: state.userName,
      result,
    });
  },
  setUserName(state, name) {
    state.userName = name || '';
  },
};

function fetchResults() {
  const data = localStorage.getItem('results');
  if (!data) return [];
  return JSON.parse(data);
}
