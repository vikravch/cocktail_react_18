import {ShortCocktailServer} from "../../data/type/DataTypes";

export default class CocktailShort{
    private readonly _name: string;
    private readonly _thumb: string;
    private readonly _id: string;
    constructor(data: ShortCocktailServer) { // data === json from server
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
