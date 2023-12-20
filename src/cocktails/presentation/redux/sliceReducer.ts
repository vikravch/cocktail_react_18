import {createSlice} from "@reduxjs/toolkit";
import {getByCategoryAction, getCategoriesAction, getCocktailByIdAction, getRandomCocktailAction} from "./asyncActions";
import {Cocktail} from "../../domain/model/Cocktail";
import convertCategoryArray, {CategoryPresentation} from "../../domain/use_cases/convertCategoryArray";
import CocktailShort from "../../domain/model/CocktailShort";
import {getCocktail} from "../../data/server/api";
import {ShortCocktailServer} from "../../data/type/DataTypes";

export type ReducerType = {
    cocktailRandom: Cocktail | undefined,
    cocktailDetailed: Cocktail | undefined,
    categories: CategoryPresentation[],
    categoryCocktails: CocktailShort[],
    errorMessage: string | undefined
}
const initialState: ReducerType = {
    cocktailRandom: undefined,
    cocktailDetailed: undefined,
    categories: [],
    categoryCocktails: [],
    errorMessage: undefined
}

const reducer = createSlice(
    {
        name: 'cocktail',
        initialState: initialState,
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
                    console.log("createAsyncThunk - "+action.payload);
                    const resObj = JSON.parse(action.payload);
                    state.cocktailRandom = new Cocktail(resObj.drinks[0]);
                }).addCase(getCategoriesAction.fulfilled,
                (state, action) => {
                    state.errorMessage = undefined;
                    const resObj = JSON.parse(action.payload);
                    state.categories = convertCategoryArray(resObj.drinks);
                }).addCase(getCocktailByIdAction.fulfilled,
                (state, action) => {
                    const resObj = JSON.parse(action.payload);
                    state.errorMessage = undefined;
                    state.cocktailDetailed = new Cocktail(resObj.drinks[0]);
                }).addCase(getByCategoryAction.fulfilled,
                (state, action) => {
                    const resObj = JSON.parse(action.payload);
                    const cocktailList = resObj.drinks.map((item: ShortCocktailServer) => new CocktailShort(item));
                    state.errorMessage = undefined;
                    state.categoryCocktails = cocktailList;
                })
                .addCase((
                        getRandomCocktailAction.rejected,
                            getCategoriesAction.rejected,
                            getCocktailByIdAction.rejected,
                            getByCategoryAction.rejected
                ),
                (state, action) => {
                    state.errorMessage = action.error.message;
                })
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
