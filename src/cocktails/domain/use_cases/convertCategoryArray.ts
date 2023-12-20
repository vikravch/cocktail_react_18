// item => {strCategory: " Category "}
import {CategoryServer} from "../../data/type/DataTypes";

export default function convertCategoryArray(
    categoryStrArray: CategoryServer[]
): CategoryPresentation[]{
    if(!categoryStrArray) return [];
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

export type CategoryPresentation = {
    name: string,
    slug: string
}
