import HomePage from "../../features/home_page/presentation/HomePage";
import CategoryPage from "../../features/category_page/presentation/CategoryPage";
import ErrorPage from "../../features/ErrorPage";
import React, {Component, useContext} from 'react';
import {AppContext} from "../context/context";

// home, category, error_page
export const HOME = 'home'
export const CATEGORY = 'category'
export const ERROR = 'error_page'

function Router() {
    const {page} = useContext(AppContext);
    switch (page) {
        case HOME:
            return <HomePage/>;
        case CATEGORY:
            return <CategoryPage/>;
        case ERROR:
            return <ErrorPage/>;
        default:
            return <ErrorPage/>;
    }
}

export default Router;
