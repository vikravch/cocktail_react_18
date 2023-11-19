import React from "react";
import * as Routes from './router';
import style from './Navigation.module.css';
import './Navigation.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
function Navigation(){
    const {pathname} = useLocation();
    return (
        <div className={style.nav_container}>
            <Link className={'item_nav'} to={`/${Routes.HOME}`}>Home</Link>
            <Link className={'item_nav'} to={`/${Routes.CATEGORY}`}>Category</Link>
            <span> Current page - {pathname}</span>
        </div>
    )
}
export default Navigation;
