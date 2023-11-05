import HomePage from "../../features/home_page/presentation/HomePage";
import CategoryPage from "../../features/category_page/presentation/CategoryPage";
import ErrorPage from "../../features/ErrorPage";
import React from "react";

// home, category, error_page
export const HOME = 'home'
export const CATEGORY = 'category'
export const ERROR = 'error_page'
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