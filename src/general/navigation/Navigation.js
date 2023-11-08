import React, {useContext} from "react";
import * as Routes from './router';
import style from './Navigation.module.css';
import './Navigation.css';
import {AppContext} from "../context/context";
function Navigation(){
    const context = useContext(AppContext);
    return (
        <div className={style.nav_container}>
                        <span className={'item_nav'}
                              onClick={()=>{context.changePage(Routes.HOME)}}>Home</span>
            <span className={'item_nav'}
                  onClick={()=>{context.changePage(Routes.CATEGORY)}}>Category</span>
            <span> Current page - {context.page}</span>
        </div>
    )
}
export default Navigation;
