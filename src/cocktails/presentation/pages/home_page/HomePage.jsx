import React, {useContext, useEffect} from 'react';
import {Button, H1} from "../../../../general/style/components/buttons";
import * as Icons from "react-bootstrap-icons";
import CocktailComponent from "../../../../general/component/CocktailComponent";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesAction, getRandomCocktailAction} from "../../redux/asyncActions";
import {Alert} from "react-bootstrap";

const HomePage = () => {
    const dispatch = useDispatch();
    const cocktail = useSelector(store => store.cocktailRandom);

    useEffect(()=>{
        dispatch(getRandomCocktailAction());
        dispatch(getCategoriesAction());
    },[]);

    const error = useSelector(store => store.errorMessage);
    if (error) {
        return <Alert>{error}</Alert>
    }

    if (cocktail){
        console.log(cocktail);
        return (
            <>
                <H1>Home page</H1>
                <Button className="btn btn-success" onClick={
                    ()=>{
                        dispatch(getRandomCocktailAction());
                    }
                }>
                    <Icons.ArrowClockwise size={20}/> Get random cocktail
                </Button>
                <CocktailComponent cocktail={cocktail}/>
            </>
        )
    } else {
        return <h3>Loading...</h3>
    }
}

export default HomePage;
