import React from 'react';
import * as Icons from "react-bootstrap-icons";
// @ts-ignore
import style from "./CocktailComponent.module.css";
import {Cocktail} from "../../cocktails/domain/model/Cocktail";

type Props = {
    cocktail: Cocktail
}
function CocktailComponent(props: Props) {
    return (
        <div className="container">
            <div className="row">
                <h3>{props.cocktail.name}</h3>
                <div className="col-12">
                    <img
                        src={props.cocktail.imageURL}
                        className={style.cocktail_img}
                        loading="lazy"/>
                </div>
                <h5 className="pt-3">
                    {   (props.cocktail.alcoholic.toLowerCase() === 'alcoholic')?
                            <Icons.SlashCircle size={20} color="red"/>:<></>
                    }
                    Category - {props.cocktail.category}</h5>
                <p>
                    {props.cocktail.instructions}
                </p>
                <em>Glass type - {props.cocktail.glassType}</em>
            </div>
        </div>
    );
}

export default CocktailComponent;
