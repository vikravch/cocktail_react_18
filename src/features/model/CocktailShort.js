/*
 {
            "strDrink": "3-Mile Long Island Iced Tea",
            "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
            "idDrink": "15300"
        },
 */
export default class CocktailShort{
    constructor(data) { // data === json from server
        this._name = data.strDrink;
        this._thumb = data.strDrinkThumb+'/preview';
        this._id = data.idDrink;
    };
    get id(){
        return this._id;
    }
    get name(){
        return this._name;
    }
    get thumb(){
        return this._thumb;
    }
}
