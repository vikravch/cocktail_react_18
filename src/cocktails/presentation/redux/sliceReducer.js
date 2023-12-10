import {createSlice} from "@reduxjs/toolkit";
import {getByCategoryAction, getCategoriesAction, getCocktailByIdAction, getRandomCocktailAction} from "./asyncActions";

const reducer = createSlice(
    {
        name: 'cocktail',
        initialState: {
            cocktailRandom: undefined,
            cocktailDetailed: undefined,
            categories: [],
            categoryCocktails: [],
            errorMessage: undefined
        },
        reducers: {
            setRandomCocktail(state, action) {
                state.cocktailRandom = action.payload;
            },
            setDetailedCocktail(state, action) {
                state.cocktailDetailed = action.payload;
            },
            setCategories(state, action) {
                state.categories = action.payload;
            },
            setCategoryCocktails(state, action) {
                state.categoryCocktails = action.payload;
            },
            setErrorMessage(state, action) {
                state.errorMessage = action.payload;
            }
        },
        extraReducers: builder => {
            builder.addCase(getRandomCocktailAction.fulfilled,
                (state, action) => {
                    state.errorMessage = undefined;
                    state.cocktailRandom = action.payload;
                }).addCase(getCategoriesAction.fulfilled,
                (state, action) => {
                    state.errorMessage = undefined;
                    state.categories = action.payload;
                }).addCase(getCocktailByIdAction.fulfilled,
                (state, action) => {
                    state.errorMessage = undefined;
                    state.cocktailDetailed = action.payload;
                }).addCase(getByCategoryAction.fulfilled,
                (state, action) => {
                    state.errorMessage = undefined;
                    state.categoryCocktails = action.payload;
                })
                /*.addCase((
                    getRandomCocktailAction.rejected,
                    getCategoriesAction.rejected,
                    getCocktailByIdAction.rejected
                ),
                (state, action) => {
                    state.errorMessage = action.error.message;
                })*/
        }
    }
);

export const {
    setRandomCocktail,
    setDetailedCocktail,
    setCategories,
    setCategoryCocktails,
    setErrorMessage
} = reducer.actions;
export default reducer.reducer;
