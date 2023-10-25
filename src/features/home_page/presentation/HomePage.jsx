import React from 'react';

const HomePage = (props) => {
    return (
        <>
            <h1>Home page</h1>
            <button onClick={props.getRandomCocktail}>
                Get random cocktail
            </button>
            <h3>{props.cocktail.name}</h3>
            <img src={props.cocktail.imageURL+'/preview'}/>
        </>
    )
}

export default HomePage;

// rsi