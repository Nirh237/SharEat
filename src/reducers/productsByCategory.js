const ProductsReducerDefaultState = [];

const ProductsReducer = (state = ProductsReducerDefaultState, action) => {
    switch (action.type) {

      case 'SET_products': return action.products;

      default:
        return state;
    }
  };

  export default ProductsReducer;