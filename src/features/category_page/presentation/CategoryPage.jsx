import React from 'react';

const CategoryPage = (props) => {
    return (
        <>
            <h1>Category page</h1>
            <button onClick={()=>{props.getCategories()}}>Get categories list</button>
            <div>{
                props.categories.map((category)=>{
                    return <span key={category}>{category}</span>;
                })
            }</div>
        </>)
}

export default CategoryPage;