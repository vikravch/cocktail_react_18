import React, {Component} from 'react';
import {Cocktail} from "../../features/model/Cocktail";
import {AppContext} from "./context";
import {getByCategory, getCategories, getRandomCocktail} from "../../features/api";
import CocktailShort from "../../features/model/CocktailShort";

class AppContextWrapper extends Component {
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
    changePage(newPage){
        this.setState({page: newPage});
    }
    render() {
        return (
            <AppContext.Provider
                value={{
                    page: this.state.page,
                    changePage: (newPage)=>{this.changePage(newPage)},
                    getRandomCocktail: ()=>{
                        this.getRandomCocktailApi()
                    },
                    cocktail: this.state.currentCocktail,
                    categories: this.state.categories,
                    getByCategory: (categoryName)=>{
                        this.getByCategoryApi(categoryName)
                    },
                    categoryCocktails: this.state.categoryCocktails
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

export default AppContextWrapper;
