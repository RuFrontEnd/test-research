export const fetchAPI = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
    response.json()
  );
