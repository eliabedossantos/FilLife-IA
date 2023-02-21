const INITIAL_STATE = {
  itemSelected: null,
  especifications: {
    ingredients: '',
    goal: '',
    calories: 0,
    meals: 0,
    restrictions: '',
  },
};

const RecipesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RECIPES_INICIAL_STATE':
      console.log('RECIPES_INICIAL_STATE', action);
      return {...state, ...INITIAL_STATE};
    case 'RECIPES_MODIFY_ITEM_SELECTED':
      console.log('RECIPES_MODIFY_ITEM_SELECTED', action);
      return {...state, itemSelected: action.payload};
    case 'RECIPES_MODIFY_ESPECIFICATIONS':
      console.log('RECIPES_MODIFY_ESPECIFICATIONS', action);
      return {...state, especifications: action.payload};
    default:
      return state;
  }
};

export default RecipesReducer;
