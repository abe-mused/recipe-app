import React from 'react';

import Header from './components/header/Header';
import FavoriteSection from './components/favoriteSection/FavSection';
import FeaturedSection from './components/featuredSection/FeaturedSection';
import ExploreSection from './components/exploreSection/ExploreSection';
import Footer from './components/footer/Footer';

require('./recipeApp.scss');

export default function RecipeApp (){
    return (
        <div className="recipe-app">
            <Header />

            <FavoriteSection />
            <FeaturedSection />
            <ExploreSection />
            <Footer />
        </div>
    );
}