const wrapper = document.querySelector(".country-wrapper");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  const input = document.querySelector(".input-country");
  const inputValue = input.value;

  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${inputValue}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    renderData(data);
  });
});

function renderData(country) {
  console.log(country);
  const html = `
  <div class="country">
    <h1>${country.name}</h1>
    <p>Population: ${(country.population / 10000000).toFixed(2)} M people</p>
    <p>Capital: ${country.capital}</p>
    <p>Language: ${country.languages[0].name}</p>
  </div>
  `;

  wrapper.insertAdjacentHTML("afterbegin", html);
}
