export function getAllNews() {
  const endpoint = `http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-22&sortBy=publishedAt&apiKey=07c5301df90343fbbfbb63949ad75108`;
  return fetch(endpoint, { mode: "cors" }).then((res) => res.json());
}

