import {categoriesFake, cocktail1} from "./fakes";
import {Cocktail} from "../../domain/model/Cocktail";

export const getRandomCocktail = () => {
    return JSON.parse(cocktail1);
}
export const getCategories = () => {
    return JSON.parse(categoriesFake);
}
