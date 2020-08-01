const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://nerdflix1.herokuapp.com'; // a url para por online vai aqui
fetch(URL);

export default {
  URL_BACKEND,
};
