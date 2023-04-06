export const select = (category) => {
  return {
    type: 'SELECT',
    payload: category,

  }

}

export const reset = () => {
  return {
    type: 'RESET',
  }
}

export const addProduct = (product) => {
  return {
    type: 'ADD-PRODUCT',
    payload: product,
  }
}