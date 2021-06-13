import React from 'react';
import ExploreRecipe, {ExploreRecipeProps} from './ExploreRecipe';
require('./exploreSection.scss');

export default function ExploreSection(){
    const myProps: ExploreRecipeProps = {
        imageURL:"https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg",
        name:"Fennel Dauphinoise"
    }
    return (
        <div className="explore-section">
            <span className="title"> Explore Recipes </span>
            <ul>
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
                <ExploreRecipe
                    {...myProps}
                />
            </ul>
        </div>
    );
}