import React from 'react';
import {useHistory} from "react-router-dom";

// rsf
function CocktailShort(props) {
    const history = useHistory();
    return (
        <div className="col-3 p-2">
            <div role="button" className="card" onClick={() => {
                // do some work ...
                history.push('/cocktail?id=' + props.data.id);
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
