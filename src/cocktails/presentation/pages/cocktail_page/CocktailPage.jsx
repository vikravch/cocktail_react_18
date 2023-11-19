import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import CocktailComponent from "../../../../general/component/CocktailComponent";
import {AppContext} from "../../../../general/context/context";

function CocktailPage() {
    const {search} = useLocation();
    const searchParams = new URLSearchParams(search);
    const {cocktail, getCocktailById} = useContext(AppContext);

    useEffect(()=>{
        if(searchParams.get('id')){
            getCocktailById(searchParams.get('id'));
        }
    }, [search]);
    console.log(cocktail);
    return (
        <>
            <h1>Cocktail id - {searchParams.get('id')}</h1>
            {(cocktail)?<CocktailComponent cocktail={cocktail}/>:<h3>Loading...</h3>}
        </>
    );
}

export default CocktailPage;
