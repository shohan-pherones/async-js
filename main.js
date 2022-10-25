const dronesContainer = document.querySelector(".drones-container");

fetch("https://aero-verge.herokuapp.com/dronesArr")
  .then((response) => response.json())
  .then((data) => getData(data));

function getData(drones) {
  drones.forEach((drone) => renderData(drone));
}

function renderData(drone) {
  const html = `
  <h1>${drone.title}</h1>
  <p>Price: $${drone.price}</p>
`;

  dronesContainer.insertAdjacentHTML("afterbegin", html);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => renderPosts(data));

function renderPosts(posts) {
  posts.forEach((post) => console.log(post));
}

fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => console.log(data));
