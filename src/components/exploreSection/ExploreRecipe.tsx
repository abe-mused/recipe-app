import React from 'react';
require('./exploreRecipe.scss');
export interface ExploreRecipeProps {
    imageURL: string;
    name: string;
}
export default class ExploreRecipe extends React.Component<any, ExploreRecipeProps>{
    render(){
    return (
        <li className="explore-recipe">
            <div className="explore-recipe-header">
                <span className="type">Random Recipe</span>
                <img src={this.props.imageURL} alt={this.props.imageURL}></img>
            </div>
            <div className="explore-recipe-body">
                <h4 className="recipe-name">{this.props.name}</h4>
                <button className="fav-button">
                    <i className="fas fa-heart"></i>
                </button>
            </div>
        </li>
    );
    }
}

