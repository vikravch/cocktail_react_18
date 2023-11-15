import React from 'react';

function CocktailComponent(props) {
    return (
        <>
            <h3>{props.cocktail.name}</h3>
            <img src={props.cocktail.imageURL+'/preview'}/>
        </>
    );
}

export default CocktailComponent;
