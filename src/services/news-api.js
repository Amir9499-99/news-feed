export function getAllNews() {
  const endpoint = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-21&sortBy=publishedAt&apiKey=8c5fd1d01b764340a5acc0a0c9bc2d60`;
  return fetch(endpoint, { mode: "cors" }).then((res) => res.json());
}

