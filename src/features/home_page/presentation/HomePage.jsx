import React from 'react';
import {Button, H1} from "../../../general/style/components/buttons";

const HomePage = (props) => {
    return (
        <>
            <H1>Home page</H1>
            <Button onClick={props.getRandomCocktail}>
                Get random cocktail
            </Button>
            <h3>{props.cocktail.name}</h3>
            <img src={props.cocktail.imageURL+'/preview'}/>
        </>
    )
}

export default HomePage;

// rsi