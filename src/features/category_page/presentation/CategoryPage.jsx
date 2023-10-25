import React from 'react';
import {H1} from "../../../general/style/components/buttons";
import style from './CategoryPage.module.css';
import {NavCategoryItem} from "../../../general/style/components/items";

const CategoryPage = (props) => {
    return (
        <>
            <H1>Category page</H1>
            <div className={style.categories_container}>{
                props.categories.map((category)=>{
                    return <NavCategoryItem key={category}>{category}</NavCategoryItem>;
                })
            }</div>
        </>)
}

export default CategoryPage;