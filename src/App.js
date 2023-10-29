import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';
import {route} from "./general/navigation/router";
import Navigation from "./general/navigation/Navigation";
import {getByCategory, getCategories, getRandomCocktail} from "./features/api";
import {Cocktail} from "./features/model/Cocktail";
import CocktailShort from "./features/model/CocktailShort";
// rcc
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
            currentCocktail: new Cocktail({}),
            categories: [],
            categoryCocktails: [],
        }
    }

    componentDidMount() {
        this.getRandomCocktailApi();
        this.getCategoriesApi();
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
    getByCategoryApi(categoryName){
        getByCategory(categoryName).then((result)=>{
            console.log(result);
            const resObj = JSON.parse(result);
            const cocktailList = resObj.drinks.map(item => new CocktailShort(item));
            this.setState({...this.state, categoryCocktails: cocktailList});
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
                        categories: this.state.categories,
                        getByCategory: (categoryName)=>{
                            this.getByCategoryApi(categoryName)
                        },
                        categoryCocktails: this.state.categoryCocktails
                    })
                }
            </div>
        );
    }
}

export default App;