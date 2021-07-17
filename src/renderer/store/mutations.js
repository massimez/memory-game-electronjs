export default {
  setResult(state, result) {
    const results = fetchResults();
    localStorage.setItem('results', JSON.stringify([{
      name: state.userName,
      result,
    }, ...results]));
  },
  setUserName(state, name) {
    state.userName = name || '';
  },
  addInitialResults(state) {
    const initialResults = [{
      name: 'Obi-Wan Kenobi',
      result: 534,
    },
    {
      name: 'Daniil Novikov',
      result: 153,
    },
    {
      name: 'Chewbacca',
      result: 496,
    },
    {
      name: 'Yoda',
      result: 325,
    },
    {
      name: 'Darth Vader',
      result: 187,
    },
    {
      name: 'Luke Skywalker',
      result: 255,
    },
    ];
    localStorage.setItem('results', JSON.stringify(initialResults));
  },
};

function fetchResults() {
  const data = localStorage.getItem('results');
  if (!data) return [];
  return JSON.parse(data);
}
