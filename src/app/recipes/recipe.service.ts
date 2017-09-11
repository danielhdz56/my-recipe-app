import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('First Recipe', 'This is simply a test', 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg'),
        new Recipe('Second Recipe', 'This is simply another test', 'http://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/18180350/051SIP112-grilled-mustard-rosemary-chicken-recipe-alt-main.jpg')
    ];

    getRecipes(){
        // slice returns a new array which is an exact copy from the one in this file.
        // if we omit slice() we would end up, possibly, changing the original array.
        return this.recipes.slice(); 
    }


}