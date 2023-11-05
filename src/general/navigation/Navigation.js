import React from "react";
import * as Routes from './router';
import style from './Navigation.module.css';
import './Navigation.css';
import {AppContext} from "../context/context";
function Navigation(){
    return (
        <AppContext.Consumer>
            {
                value => (
                    <div className={style.nav_container}>
                        <span className={'item_nav'}
                            onClick={()=>{value.changePage(Routes.HOME)}}>Home</span>
                        <span className={'item_nav'}
                            onClick={()=>{value.changePage(Routes.CATEGORY)}}>Category</span>
                        <span> Current page - {value.page}</span>
                    </div>
                )
            }
        </AppContext.Consumer>
    )
}
export default Navigation;
