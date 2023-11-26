import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import CocktailComponent from "../../../../general/component/CocktailComponent";
import {useDispatch, useSelector} from "react-redux";
import {getCocktailByIdAction} from "../../redux/asyncActions";
import {setDetailedCocktail} from "../../redux/actions";
import {Alert} from "react-bootstrap";

function CocktailPage() {
    const {search} = useLocation();
    const searchParams = new URLSearchParams(search);
    const dispatch = useDispatch();
    const cocktailDetailed = useSelector(store => store.cocktailDetailed);

    useEffect(()=>{
        return () => {
            dispatch(setDetailedCocktail());
        }
    }, []);

    useEffect(()=>{
        if(searchParams.get('id')){
            dispatch(getCocktailByIdAction(searchParams.get('id')));
        }
    }, [search]);
    console.log(cocktailDetailed);

    const error = useSelector(store => store.errorMessage);
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
