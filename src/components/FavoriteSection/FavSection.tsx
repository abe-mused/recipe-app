import React from 'react';
import FavRecipe, {FavRecipeProps} from '../favoriteSection/FavRecipe';
require('./favSection.scss');

export default function FavoriteSection(){
    const myProps: FavRecipeProps = {
        imageURL:"https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg",
        name:"Fennel Dauphinoise"
    }
    return (
        <div className="fav-section">
            <span className="title">Favorite Recipes</span>
            <ul>
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
                <FavRecipe
                    {...myProps}
                />
            </ul>
        </div>
    );
}