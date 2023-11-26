export const SET_COCKTAIL_RANDOM = 'SET_COCKTAIL_RANDOM';
export const SET_COCKTAIL_DETAILED = 'SET_COCKTAIL_DETAILED';
export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_CATEGORY_COCKTAILS = 'SET_CATEGORY_COCKTAILS';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const setRandomCocktail = (cocktail) => ({
    type: SET_COCKTAIL_RANDOM,
    payload: cocktail
});
export const setDetailedCocktail = (cocktail) => ({
    type: SET_COCKTAIL_DETAILED,
    payload: cocktail
});
export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    payload: categories
});
export const setCategoryCocktails = (cocktails) => ({
    type: SET_CATEGORY_COCKTAILS,
    payload: cocktails
});
export const setErrorMessage = (message) => ({
    type: SET_ERROR_MESSAGE,
    payload: message
});
