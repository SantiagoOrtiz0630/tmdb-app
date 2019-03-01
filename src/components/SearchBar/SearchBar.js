import React, { Component } from 'react';
import './SearchBar.scss';

class SearchBar extends Component {
    render() {
        return (

            <div className="SearchBar">
                
                <div className="SearchBar-logo"></div>

                <input
                    onInput={ (event) => {
                        this.props.onSearch(event.target.value);
                    } }
                    type="text"
                    id="mainInput"
                    className="SearchBar-input"
                    placeholder="Buscar canción..."></input>
            </div>

        );
    }
}

export default SearchBar;
