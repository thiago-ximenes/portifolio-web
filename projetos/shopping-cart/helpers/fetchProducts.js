const fetchProducts = (query) => {
  let API_URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((err) => err);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
