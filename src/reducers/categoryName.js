const CategoryNameReducerDefaultState = [];

const CategoryNameReducer = (state = CategoryNameReducerDefaultState, action) => {
    switch (action.type) {

      case 'SET_ categories': return action.categories;

      default:
        return state;
    }
  };

  export default CategoryNameReducer;