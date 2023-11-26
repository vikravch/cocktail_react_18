import React, {useContext} from 'react';
import {H1} from "../../../../general/style/components/buttons";
import CocktailShort from "../../../../general/component/CocktailShort";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../../../general/redux/store";
import {getByCategoryAction} from "../../redux/asyncActions";
import {Alert} from "react-bootstrap";

const CategoryPage = () => {
    const categories = useSelector(store => store.categories);
    const categoryCocktails = useSelector(store => store.categoryCocktails);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const error = useSelector(store => store.errorMessage);
    if (error) {
        return <Alert>{error}</Alert>
    }

    return (
        <div className={'container'}>
            <H1>Select category</H1>
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <ul className="navbar-nav">
                        {
                            categories.map((category) => {
                                return <li className="nav-item" role="button"
                                           onClick={() => {
                                               navigate('/category/' + category.slug);
                                           }}
                                           key={category.slug}
                                >
                                    <a className="nav-link"
                                        onClick={() => {
                                            dispatch(getByCategoryAction(category.name));
                                        }}>
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
                    categoryCocktails.map((cocktailShort, index) => {
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
