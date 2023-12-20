const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';
export const getRandomCocktail = async (): Promise<string> => {
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/random.php", requestOptions);
    return await response.text();
};
export const getCategories = async (): Promise<string>=>{
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/list.php?c=list", requestOptions);
    return await response.text();
}
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
export const getByCategory = async (categoryName: string): Promise<string>=>{
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/filter.php?c="+categoryName,
        requestOptions);
    return await response.text();
}
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
export const getCocktail = async (id: string): Promise<string>=>{
    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
    };
    const response = await fetch(BASE_URL+"/lookup.php?i="+id,
        requestOptions);
    return await response.text();
}
