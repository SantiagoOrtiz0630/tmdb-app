import React, { Component } from 'react';
//import './SearchBar.scss';

class SearchBar extends Component {
    render() {
        return (

            <div className="form-group">
                <label htmlFor="mainInput">Buscar</label>
                <input
                    onInput={ (event) => {
                        this.props.onSearch(event.target.value);
                    } }
                    type="text"
                    id="mainInput"
                    className="form-control"
                    placeholder="Ingresa tu busqueda..."></input>
            </div>

        );
    }
}

export default SearchBar;
