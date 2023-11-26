// SET_COCKTAIL_RANDOM, SET_COCKTAIL_DETAILED, SET_CATEGORIES, SET_CATEGORY_COCKTAILS
import * as Actions from './actions';
function cocktailReducer(state = {
    cocktailRandom: undefined,
    cocktailDetailed: undefined,
    categories: [],
    categoryCocktails: [],
    errorMessage: undefined
}, action) {
    switch (action.type){
        case Actions.SET_COCKTAIL_RANDOM:
            return {...state, cocktailRandom: action.payload};
        case Actions.SET_COCKTAIL_DETAILED:
            return {...state, cocktailDetailed: action.payload};
        case Actions.SET_CATEGORIES:
            return {...state, categories: action.payload};
        case Actions.SET_CATEGORY_COCKTAILS:
            return {...state, categoryCocktails: action.payload};
        case Actions.SET_ERROR_MESSAGE:
            return {...state, errorMessage: action.payload};
        default: return state;
    }
}
export default cocktailReducer;
