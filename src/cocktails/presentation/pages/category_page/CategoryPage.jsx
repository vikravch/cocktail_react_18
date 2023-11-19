import React, {useContext} from 'react';
import {H1} from "../../../../general/style/components/buttons";
import CocktailShort from "../../../../general/component/CocktailShort";
import {AppContext} from "../../../../general/context/context";
import {useNavigate} from "react-router-dom";

const CategoryPage = () => {
    const context = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <div className={'container'}>
            <H1>Select category</H1>
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <ul className="navbar-nav">
                    {
                        context.categories.map((category) => {
                            return <li className="nav-item" role="button"
                                onClick={()=>{
                                    navigate('/category/'+category.slug);
                                }}
                            >
                                <a className="nav-link"
                                key={category.slug}
                                /*onClick={() => {
                                    context.getByCategory(category)
                                }}*/>
                                {category.name}
                            </a>
                            </li>
                        })
                    }
                </ul>
                </nav>
            </div>
            <div className={'row'}>
                {
                    context.categoryCocktails.map((cocktailShort, index) => {
                        return <CocktailShort
                            key={index}
                            data={cocktailShort}
                        />
                    })
                }
            </div>
        </div>
    )
}

    export default CategoryPage;
