import {createContext} from "react";
import {Cocktail} from "../../features/model/Cocktail";

export const AppContext = createContext({
    page: 'home',
    currentCocktail: new Cocktail({}),
    categories: [],
    categoryCocktails: [],
});
