const wrapper = document.querySelector(".wrapper");

class App {
  constructor() {
    this._fetchData();
  }

  _fetchData() {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok)
          throw new Error(`Products not found! (${response.status})`);
        return response.json();
      })
      .then((data) => this._renderData(data))
      .catch((error) => this._renderError(error.message));
  }

  _renderData(products) {
    products.forEach((product) => {
      const html = `
        <p>${product.id}</p>
        <h2>${product.title}</h2>
        <p>${product.price.toLocaleString("bn-BD", {
          style: "currency",
          currency: "BDT",
        })}</p>
      `;

      wrapper.insertAdjacentHTML("afterbegin", html);
    });
  }

  _renderError(error) {
    wrapper.insertAdjacentText("afterbegin", error);
  }
}

const myApp = new App();
