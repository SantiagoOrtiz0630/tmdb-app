import React from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = function (props) {
    return (<Link to={`/Movie/${props.id}`}>
        <div className="film">
            <img src={props.img} className="film-img" alt={props.title} />
            <div className="film-body">
            {(props.title.length > 15) ? 
                <h5 className="film-body-title">{ getTitle(props.title) }</h5> 
                : 
                <h5 className="film-body-title">{ props.title }</h5> }
            <h4 className="film-body-average">{props.average}</h4>
            </div>
        </div>
    </Link>);
}

function getTitle(title){
    console.log(title);
    var t = title.slice(0, 15);
    t += "...";
    console.log(t);
    return t;
}

export default MovieCard;