//import {setCategories, setCategoryCocktails, setDetailedCocktail, setErrorMessage, setRandomCocktail} from "./actions";
import {Cocktail} from "../../domain/model/Cocktail";
import convertCategoryArray from "../../domain/use_cases/convertCategoryArray";
import {getByCategory, getCategories, getCocktail, getRandomCocktail} from "../../data/server/api";
import CocktailShort from "../../domain/model/CocktailShort";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getRandomCocktailAction =
    createAsyncThunk(
    'cocktail/getRandom',  ()=>{
        return getRandomCocktail();
    }
);
export const getCategoriesAction = createAsyncThunk(
    'cocktail/getCategories', ()=>{
        return getCategories();
    }
);
export const getByCategoryAction = createAsyncThunk(
    'cocktail/getByCategory',  (categoryName)=>{
        return getByCategory(categoryName);
    }
);
export const getCocktailByIdAction = createAsyncThunk(
    'cocktail/getById', (id)=>{
        return getCocktail(id);
    }
);
/*

export const getRandomCocktailAction = () => {
    return dispatch => {
        getRandomCocktail().then(
            result => {
                console.log(result);
                const resObj = JSON.parse(result);
                const newCocktail = new Cocktail(resObj.drinks[0]);
                dispatch(setRandomCocktail(newCocktail));
            },
            err => {
                dispatch(setErrorMessage(err.message));
            }
        ).catch(err => {
            dispatch(setErrorMessage(err.message));
        });
    }
}
export const getCategoriesAction = () => {
    return dispatch => {
        getCategories().then(result => {
                const resObj = JSON.parse(result);
                const categoriesArr = convertCategoryArray(resObj.drinks);
                dispatch(setCategories(categoriesArr));
            },
            err => {
                dispatch(setErrorMessage(err.message));
            }
        ).catch(err => {
            dispatch(setErrorMessage(err.message));
        })
    }
}
export const getByCategoryAction = (categoryName) => {
    return dispatch => {
        getByCategory(categoryName).then((result) => {
                console.log(result);
                const resObj = JSON.parse(result);
                const cocktailList = resObj.drinks.map(item => new CocktailShort(item));
                dispatch(setCategoryCocktails(cocktailList));
            },
            err => {
                dispatch(setErrorMessage(err.message));
            }
        ).catch(err => {
            dispatch(setErrorMessage(err.message));
        })
    }
}
export const getCocktailByIdAction = (id) => {
    return dispatch => {
        getCocktail(id).then((result) => {
                const resObj = JSON.parse(result);
                const newCocktail = new Cocktail(resObj.drinks[0]);
                dispatch(setDetailedCocktail(newCocktail));
            },
            err => {
                dispatch(setErrorMessage(err.message));
            }
        ).catch(err => {
            dispatch(setErrorMessage(err.message));
        })
    }
}
*/
