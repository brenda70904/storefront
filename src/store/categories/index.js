const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics' },
    { name: 'food', displayName: 'Food' },
    { name: 'clothing', displayName: 'Clothing' },
  ],
  activeCategory: ''
};

function categoryReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case 'SELECT':
      return {
        ...state,
        activeCategory: payload,
      }
    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// export const select = (category) => {
//   return {
//     type: 'SELECT',
//     payload: category,

//   }

// }

// export const reset = () => {
//   return {
//     type: 'RESET',
//   }
// }


export default categoryReducer;