import React from 'react';
require('./favRecipe.scss');
export interface FavRecipeProps {
    imageURL: string;
    name: string;
}
export default class FavRecipe extends React.Component<any, FavRecipeProps>{
    render(){
    return (
        <li className="fav-recipe">
            <button className="remove-button">X</button> 
            <img src={this.props.imageURL} alt={this.props.imageURL}></img>
            <span>{this.props.name}</span>
        </li>
    );
    }
}

