import React from 'react';
import {H1} from "../../../general/style/components/buttons";
import style from './CategoryPage.module.css';
import {NavCategoryItem} from "../../../general/style/components/items";
import CocktailShort from "../../CocktailShort";

const CategoryPage = (props) => {
    return (
        <>
            <H1>Category page</H1>
            <div className={style.categories_container}>{
                props.categories.map((category)=>{
                    return <NavCategoryItem
                        key={category}
                        onClick={()=>{props.getByCategory(category)}}>
                        {category}
                    </NavCategoryItem>;
                })
            }</div>
            <div>
                {
                    props.categoryCocktails.map((cocktailShort)=>{
                        return <CocktailShort name={cocktailShort.name}
                                              thumb={cocktailShort.thumb}/>
                    })
                }
            </div>
        </>)
}

export default CategoryPage;