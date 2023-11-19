import React, {useContext} from 'react';
import {Button, H1} from "../../../../general/style/components/buttons";
import {AppContext} from "../../../../general/context/context";
import * as Icons from "react-bootstrap-icons";
import CocktailComponent from "../../../../general/component/CocktailComponent";

const HomePage = () => {
    const {getRandomCocktail, cocktail} = useContext(AppContext);
    if (cocktail){
        return (
            <>
                <H1>Home page</H1>
                <Button className="btn btn-success" onClick={getRandomCocktail}>
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
