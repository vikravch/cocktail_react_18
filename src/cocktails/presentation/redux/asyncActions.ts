import {getByCategory, getCategories, getCocktail, getRandomCocktail} from "../../data/server/api";
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
    'cocktail/getByCategory',  (categoryName:string)=>{
        return getByCategory(categoryName);
    }
);
export const getCocktailByIdAction = createAsyncThunk(
    'cocktail/getById', (id:string)=>{
        return getCocktail(id);
    }
);
