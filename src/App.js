import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import {route, Navigation} from "./router";
import {getCategories, getRandomCocktail} from "./features/api";
import {Cocktail} from "./features/Cocktail";
// rcc
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
            currentCocktail: new Cocktail({}),
            categories: []
        }
    }
    getRandomCocktailApi(){
        getRandomCocktail().then((result)=>{
            console.log(result);
            const resObj = JSON.parse(result);
            const newCocktail = new Cocktail(resObj.drinks[0]);
            this.setState({...this.state,
                currentCocktail: newCocktail});
        })
    }
    getCategoriesApi(){
        getCategories().then((result)=>{
            console.log(result);
            const resObj = JSON.parse(result);
            const categoriesArr = resObj.drinks.map((item)=>item.strCategory)
            this.setState({...this.state,
                categories:categoriesArr});
        })
    }

    render() {
        return (
            <div>
                <Navigation changePage={(newPage)=>{
                    this.setState({...this.state,
                        page:newPage});
                }}/>
                {
                    route(this.state.page, {
                        getRandomCocktail: ()=>{
                            this.getRandomCocktailApi()
                        },
                        cocktail: this.state.currentCocktail,
                        getCategories: ()=>{
                            this.getCategoriesApi()
                        },
                        categories: this.state.categories
                    })
                }
            </div>
        );
    }
}

export default App;

