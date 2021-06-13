import React from 'react';
import FeaturedRecipe, {FeaturedRecipeProps} from './FeaturedRecipe';
require('./featuredSection.scss');

export default function FeaturedSection(){
    const myProps: FeaturedRecipeProps = {
        imageURL:"https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg",
        name:"Fennel Dauphinoise"
    }
    return (
        <div className="featured-section">
            <span className="title">Today's Featured Recipes</span>
            <ul>
            <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
                <FeaturedRecipe
                    {...myProps}
                />
            </ul>
        </div>
    );
}