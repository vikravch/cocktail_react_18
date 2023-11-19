// item => {strCategory: " Category "}
export default function convertCategoryArray(categoryStrArray){
    const categoriesArr = categoryStrArray.map(
        (item)=> {
            const withoutSlash = item.strCategory.replace(" / ","_");
            const withoutSpaces = withoutSlash.replace(" ","");
            return {
                name: item.strCategory,
                slug: withoutSpaces.toLowerCase()
            }}
    )
    return categoriesArr;
}
