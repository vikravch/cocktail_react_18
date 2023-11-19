import React, {useEffect, useState} from 'react';
import {AppContext} from "./context";
import {getByCategory, getCategories, getCocktail, getRandomCocktail} from "../../cocktails/data/server/api";
import {Cocktail} from "../../cocktails/domain/model/Cocktail";
import CocktailShort from "../../cocktails/domain/model/CocktailShort";
import {useLocation} from "react-router-dom";
import convertCategoryArray from "../../cocktails/domain/use_cases/convertCategoryArray";

const AppContextFWrapper = ({children}) => {
    const [page, setPage] = useState('home');
    const [cocktail, setCocktail] = useState();
    const [categories, setCategories] = useState([]);
    const [categoryCocktails, setCategoryCocktails] = useState([]);

    const {pathname} = useLocation();
    useEffect(()=>{

        if(pathname.startsWith('/category')){
            const categorySlug = pathname.split('/')[2];
            console.log(categorySlug);
            if(categorySlug){
                const category = categories.find(
                    (item)=> item.slug === categorySlug
                );
                if(category){
                    getByCategoryApi(category.name);
                }
            }
        }
    },[pathname]);

    function getRandomCocktailApi(){
        getRandomCocktail().then((result)=>{
            console.log(result);
            const resObj = JSON.parse(result);
            const newCocktail = new Cocktail(resObj.drinks[0]);
            setCocktail(newCocktail);
        })
    }
    function getCategoriesApi(){
        getCategories().then((result)=>{
            console.log(result);
            const resObj = JSON.parse(result);
            const categoriesArr = convertCategoryArray(resObj.drinks);
            setCategories(categoriesArr);
        })
    }
    /*
        { name:"Category/name", slug:"category_name"}
    * */
    function getByCategoryApi(categoryName){
        getByCategory(categoryName).then((result)=>{
            console.log(result);
            const resObj = JSON.parse(result);
            const cocktailList = resObj.drinks.map(item => new CocktailShort(item));
            setCategoryCocktails(cocktailList);
        })
    }
    function getCocktailByIdApi(cocktailId){
        getCocktail(cocktailId).then((result)=>{
            console.log(result);
            const resObj = JSON.parse(result);
            console.log("Obj - "+resObj);
            const newCocktail = new Cocktail(resObj.drinks[0]);
            setCocktail(newCocktail);
        })
    }

    useEffect(()=>{
        getRandomCocktailApi();
        getCategoriesApi();
    }, []);

    return (
        <AppContext.Provider
            value={{
                page: page,
                changePage: (newPage)=>{setPage(newPage)},
                getRandomCocktail: ()=>{
                    getRandomCocktailApi()
                },
                cocktail: cocktail,
                categories: categories,
                getByCategory: (categoryName)=>{
                    getByCategoryApi(categoryName)
                },
                categoryCocktails: categoryCocktails,
                getCocktailById: getCocktailByIdApi
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextFWrapper;
