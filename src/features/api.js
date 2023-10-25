const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
export const getRandomCocktail = async () => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/random.php", requestOptions);
    return await response.text();
};

export const getCategories = async ()=>{
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/list.php?c=list", requestOptions);
    return await response.text();
}