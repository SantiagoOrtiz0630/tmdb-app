import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    render() {
        return (

            <div className="SearchBar">
                <input
                    onInput={ (event) => {
                        this.props.onSearch(event.target.value);
                    } }
                    type="text"
                    id="mainInput"
                    className="SearchBar__input"
                    placeholder="Buscar canción..."></input>
            </div>

        );
    }
}

export default SearchBar;
