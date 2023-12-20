const cocktailExample = JSON.parse('{"idDrink":"11965","strDrink":"Port Wine Flip","strDrinkAlternate":null,"strTags":null,"strVideo":null,"strCategory":"Ordinary Drink","strIBA":null,"strAlcoholic":"Alcoholic","strGlass":"Whiskey sour glass","strInstructions":"Shake all ingredients (except nutmeg) with ice and strain into a whiskey sour glass. Sprinkle nutmeg on top and serve.","strInstructionsES":null,"strInstructionsDE":"Alle Zutaten (au\u00dfer Muskatnuss) mit Eis sch\u00fctteln und in ein Whiskey-Sourglas abseihen. Muskatnuss dar\u00fcber streuen und servieren.","strInstructionsFR":null,"strInstructionsIT":"Shakerare tutti gli ingredienti (tranne la noce moscata) con ghiaccio e filtrare in un bicchiere da whisky sour. Cospargere di noce moscata e servire.","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/vrprxu1441553844.jpg","strIngredient1":"Port","strIngredient2":"Light cream","strIngredient3":"Powdered sugar","strIngredient4":"Egg","strIngredient5":"Nutmeg","strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"1 1\\/2 oz ","strMeasure2":"2 tsp ","strMeasure3":"1 tsp ","strMeasure4":"1 whole ","strMeasure5":null,"strMeasure6":null,"strMeasure7":null,"strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":null,"strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":"2015-09-06 16:37:24"}');
export type CocktailServer = typeof cocktailExample;

const shortCocktailExample = JSON.parse('{"strDrink":"3-Mile Long Island Iced Tea","strDrinkThumb":"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/rrtssw1472668972.jpg","idDrink":"15300"}');
export type ShortCocktailServer = typeof shortCocktailExample;

const categoryObject = JSON.parse('{"strCategory":"Ordinary Drink"}');
export type CategoryServer = typeof categoryObject;

const obj = {a:12, b:'Hello'};
type TypeOfObj = typeof obj;
const obj2:TypeOfObj = {
    a:34, b:'Test'
}
