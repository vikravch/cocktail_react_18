import React from "react";
import * as Routes from './router';
import style from './Navigation.module.css';
import './Navigation.css';
function Navigation(props){
    return (
        <div className={style.nav_container}>
            <span className={'item_nav'}
                  onClick={()=>{props.changePage(Routes.HOME)}}>Home</span>
            <span className={'item_nav'}
                  onClick={()=>{props.changePage(Routes.CATEGORY)}}>Category</span>
        </div>
    )
}
export default Navigation;