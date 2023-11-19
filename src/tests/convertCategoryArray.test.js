import convertCategoryArray from "../cocktails/domain/use_cases/convertCategoryArray";

test('simple test case', ()=>{
    const categoryArr = [
        {strCategory: "Category"},
        {strCategory: "Test space"},
        {strCategory: "Category / test"}
    ];
    const expectedCategoryArr = [
        {name: "Category", slug: "category"},
        {name: "Test space", slug: "testspace"},
        {name: "Category / test", slug: "category_test"}
    ];

    const result =
        convertCategoryArray(categoryArr);

    expect(result).toEqual(expectedCategoryArr);
});

test('test case with empty array', ()=>{
    const categoryArr = [];
    const expectedCategoryArr = [];

    const result =
        convertCategoryArray(categoryArr);

    expect(result).toEqual(expectedCategoryArr);
})

test('test case with undefined', ()=>{
    const categoryArr = undefined;
    const expectedCategoryArr = [];

    const result =
        convertCategoryArray(categoryArr);

    expect(result).toEqual(expectedCategoryArr);
})
