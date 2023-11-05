import HomePage from "../../features/home_page/presentation/HomePage";
import CategoryPage from "../../features/category_page/presentation/CategoryPage";
import ErrorPage from "../../features/ErrorPage";
import React, {Component} from 'react';
import {AppContext} from "../context/context";

// home, category, error_page
export const HOME = 'home'
export const CATEGORY = 'category'
export const ERROR = 'error_page'
class Router extends Component {
    render() {
        return (
            <AppContext.Consumer>{
                value => {
                    switch (value.page) {
                        case HOME: return <HomePage/>;
                        case CATEGORY: return <CategoryPage/>;
                        case ERROR: return <ErrorPage/>;
                        default: return <ErrorPage/>;
                    }
                }
            }
            </AppContext.Consumer>
        );
    }
}
export default Router;
