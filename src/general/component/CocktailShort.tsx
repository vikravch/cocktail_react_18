import React from 'react';
import {useNavigate} from "react-router-dom";
import CocktailShortType from "../../cocktails/domain/model/CocktailShort";

type Props = {
    data: CocktailShortType
}
// rsf
function CocktailShort(props: Props) {
    const navigate = useNavigate();
    return (
        <div className="col-3 p-2">
            <div role="button" className="card" onClick={() => {
                // do some work ...
                navigate('/cocktail?id=' + props.data.id);
            }}> {/* => <a> */}
                <img src={props.data.thumb} className="card-img-top"></img>
                <div className="card-body">
                    <span className="card-text">{props.data.name}</span>
                </div>
            </div>
        </div>
    );
}

export default CocktailShort;
