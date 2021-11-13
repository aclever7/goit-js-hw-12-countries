export default function fetchCountry(e) {
  const form = document.querySelector('input');
  const searchQuery = e.target.value;
  const URL = `https://restcountries.com/v2/name/${searchQuery}`;
  return fetch(URL)
    .then(response => response.json())
    .then(data => data)
    .finally(form.reset);
}
