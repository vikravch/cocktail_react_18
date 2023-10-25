import HomePage from "./features/home_page/presentation/HomePage";
import CategoryPage from "./features/category_page/presentation/CategoryPage";
import ErrorPage from "./features/ErrorPage";
import React from "react";

// home, category, error_page
const HOME = 'home'
const CATEGORY = 'category'
const ERROR = 'error_page'
export function route (path, bundle){
    let pageJSX;
    switch (path) {
        case HOME: pageJSX = <HomePage {...bundle}/>; break;
        case CATEGORY: pageJSX = <CategoryPage {...bundle}/>; break;
        default: pageJSX = <ErrorPage/>;
    }
    return pageJSX;
}
// changePage(pageName)
export function Navigation(props){
    return (
        <div>
            <span onClick={()=>{props.changePage(HOME)}}>Home</span>
            <span onClick={()=>{props.changePage(CATEGORY)}}>Category</span>
        </div>
    )
}