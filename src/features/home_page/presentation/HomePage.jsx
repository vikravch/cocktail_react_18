import React from 'react';
import {Button, H1} from "../../../general/style/components/buttons";
import {AppContext} from "../../../general/context/context";

const HomePage = () => {
    return (
        <AppContext.Consumer>{
            value => (
                <>
                    <H1>Home page</H1>
                    <Button onClick={value.getRandomCocktail}>
                        Get random cocktail
                    </Button>
                    <h3>{value.cocktail.name}</h3>
                    <img src={value.cocktail.imageURL+'/preview'}/>
                </>
            )
        }
        </AppContext.Consumer>
    )
}

export default HomePage;
