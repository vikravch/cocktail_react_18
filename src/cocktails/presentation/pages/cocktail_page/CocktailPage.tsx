import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import CocktailComponent from "../../../../general/component/CocktailComponent";
import {useDispatch, useSelector} from "react-redux";
import {getCocktailByIdAction} from "../../redux/asyncActions";
import {Alert} from "react-bootstrap";
import {AppDispatch} from "../../../../general/redux/store";
import {ReducerType, setDetailedCocktail} from "../../redux/sliceReducer";
import {Cocktail} from "../../../domain/model/Cocktail";

function CocktailPage() {
    const {search} = useLocation();
    const searchParams = new URLSearchParams(search);
    const dispatch = useDispatch<AppDispatch>();
    const cocktailDetailed = useSelector<
        ReducerType, Cocktail|undefined
    >(store => store.cocktailDetailed);

    useEffect(()=>{
        return () => {
            dispatch(setDetailedCocktail(undefined));
        }
    }, []);

    useEffect(()=>{
        if(searchParams.get('id')){
            dispatch(getCocktailByIdAction(searchParams.get('id') || '1001'));
        }
    }, [search]);
    console.log(cocktailDetailed);

    const error = useSelector<
        ReducerType, string|undefined
    >(store => store.errorMessage);
    if (error) {
        return <Alert>{error}</Alert>
    }

    return (
        <>
            {(cocktailDetailed)?<CocktailComponent cocktail={cocktailDetailed}/>:<h3>Loading...</h3>}
        </>
    );
}

export default CocktailPage;
