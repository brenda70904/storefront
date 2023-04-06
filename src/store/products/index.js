const initialState = [
  { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
  { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
  { name: 'PS5', category: 'electronics', price: 499.99, inStock: 10 },
  { name: 'Apple watch', category: 'electronics', price: 299.99, inStock: 5 },
  { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
  { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
  { name: 'skirt', category: 'clothing', price: 18.99, inStock: 15 },
  { name: 'Pants', category: 'clothing', price: 15.99, inStock: 10 },
  { name: 'Apples', category: 'food', price: .99, inStock: 500 },
  { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
  { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
  { name: 'Bananas', category: 'food', price: 2.39, inStock: 90 },
];

function productsReducer(state = initialState, action) {

  const { type, payload } = action;

  switch (type) {

    case 'SELECT':
      return initialState.filter(product => product.category === payload.name);

    case "ADD-PRODUCT":
      let activeCategory = payload.category;
      let result = initialState.map(product => product.name === payload.name ? {...product, instock: product.inStock - 1} : product)
      .filter(product => product.category === activeCategory);
      console.log(result);
  return result;
    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default productsReducer;
