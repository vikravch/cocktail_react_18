import {CocktailServer} from "../../data/type/DataTypes";

export class Cocktail {
    private readonly _id: string;
    private readonly _name: string;
    private readonly _category: string;
    private readonly _alcoholic: string;
    private readonly _glassType: string;
    private readonly _instructions: string;
    private readonly _imageURL: string;

    constructor(data: CocktailServer) {
        this._id = data.idDrink || '';
        this._name = data.strDrink || '';
        this._category = data.strCategory || '';
        this._alcoholic = data.strAlcoholic || '';
        this._glassType = data.strGlass || '';
        this._instructions = data.strInstructions || '';
        this._imageURL = data.strDrinkThumb || '';
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get category() {
        return this._category;
    }

    get alcoholic() {
        return this._alcoholic;
    }

    get glassType() {
        return this._glassType;
    }

    get instructions() {
        return this._instructions;
    }

    get imageURL() {
        return this._imageURL;
    }
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            category: this.category,
            alcoholic: this.alcoholic,
            glassType: this.glassType,
            instructions: this.instructions,
            imageURL: this.imageURL
        };
    }
}
