import HomePage from "../../features/home_page/presentation/HomePage";
import CategoryPage from "../../features/category_page/presentation/CategoryPage";
import ErrorPage from "../../features/ErrorPage";
import React from 'react';
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

// home, category, error_page
export const HOME = 'home'
export const CATEGORY = 'category'
export const ERROR = 'error_page'

function Router() {
    return (
        <Switch>
            <Route path={['/', `/${HOME}`]} component={HomePage} exact /> {/* /, /home */}
            <Route path={`/${CATEGORY}`} component={CategoryPage} exact />
            <Route component={ErrorPage}/>
        </Switch>
    )
}

export default Router;
