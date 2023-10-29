import React from 'react';
// rsf
function CocktailShort(props) {
    return (
        <div>
            <img src={props.thumb} style={{width:'40px',height:'40px'}}></img>
            <span>{props.name}</span>
        </div>
    );
}

export default CocktailShort;