import {createContext} from "react";
import {Cocktail} from "../../cocktails/domain/model/Cocktail";

export const AppContext = createContext({
    page: 'home',
    changePage: ()=>{},
    getRandomCocktail: ()=>{},
    cocktail: new Cocktail({}),
    categories: [],
    getByCategory: ()=>{},
    categoryCocktails: [],
});

/*
{
                    page: this.state.page,
                    changePage: (newPage)=>{this.changePage(newPage)},
                    getRandomCocktail: ()=>{
                        this.getRandomCocktailApi()
                    },
                    cocktail: this.state.currentCocktail,
                    categories: this.state.categories,
                    getByCategory: (categoryName)=>{
                        this.getByCategoryApi(categoryName)
                    },
                    categoryCocktails: this.state.categoryCocktails
                }
 */
