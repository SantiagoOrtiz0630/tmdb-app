import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = function (props) {
    return <Link to={}
    <div className="film">
        <img src={props.img} className="film-img" alt={props.title} />
        <div className="film-body">
            <h5 className="film-body-title">{props.title}</h5>
            <p className="film-body-text">{props.description}</p>
            <a href="#" className="film-body-link">ver</a>
        </div>
    </div>;
}

export default MovieCard;