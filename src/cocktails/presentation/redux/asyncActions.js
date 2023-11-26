import {setCategories, setCategoryCocktails, setDetailedCocktail, setErrorMessage, setRandomCocktail} from "./actions";
import {useDispatch} from "react-redux";
import {Cocktail} from "../../domain/model/Cocktail";
import convertCategoryArray from "../../domain/use_cases/convertCategoryArray";
import {getRandomCocktail, getCategories, getByCategory, getCocktail} from "../../data/server/api";
import CocktailShort from "../../domain/model/CocktailShort";

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
