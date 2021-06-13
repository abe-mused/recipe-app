import React from 'react';
require('./featuredRecipe.scss');
export interface FeaturedRecipeProps {
    imageURL: string;
    name: string;
}
export default class Featuredecipe extends React.Component<any, FeaturedRecipeProps>{
    render(){
    return (
        <li className="featured-recipe">
            <img src={this.props.imageURL} alt={this.props.imageURL}></img>
            <span>{this.props.name}</span>
        </li>
    );
    }
}

