import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome!', 
            'https://upload.wikimedia.org/wikipedia/commons/a/ae/Wiener-Schnitzel02.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/2560px-Cheeseburger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
    ];

    getRecipes(){
        // slice returns a new array which is an exact copy from the one in this file.
        // if we omit slice() we would end up, possibly, changing the original array.
        return this.recipes.slice(); 
    }
}