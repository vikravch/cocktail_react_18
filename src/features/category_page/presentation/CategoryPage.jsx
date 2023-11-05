import React from 'react';
import {H1} from "../../../general/style/components/buttons";
import style from './CategoryPage.module.css';
import {NavCategoryItem} from "../../../general/style/components/items";
import CocktailShort from "../../CocktailShort";
import {AppContext} from "../../../general/context/context";

const CategoryPage = () => {
    return (
        <AppContext.Consumer>{
            value => (
                <>
                    <H1>Category page</H1>
                    <div className={style.categories_container}>{
                        value.categories.map((category)=>{
                            return <NavCategoryItem
                                key={category}
                                onClick={()=>{value.getByCategory(category)}}>
                                {category}
                            </NavCategoryItem>;
                        })
                    }</div>
                    <div>
                        {
                            value.categoryCocktails.map((cocktailShort)=>{
                                return <CocktailShort name={cocktailShort.name}
                                                      thumb={cocktailShort.thumb}/>
                            })
                        }
                    </div>
                </>
            )
        }</AppContext.Consumer>
        )
}

export default CategoryPage;
