import React from 'react';
import SearchBar from './SearchBar';
require('./header.scss')

export default function Header(){
    return (
        <div className="header">
            <span className="brand-name">Abe's Recipes</span>
            <SearchBar></SearchBar>
        </div>
    );
}