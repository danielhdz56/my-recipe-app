import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

  constructor(
    private httpClient: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService) { }

  storeRecipes() {
    // const headers = new HttpHeaders().set('Authorization', 'Bearer asdfghjkl');

    // return this.httpClient.put('https://udemy-ng-http-85067.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
    //   observe: 'body',
    //   params: new HttpParams().set('auth', token)
    //   // headers: headers
    // });
    const req = new HttpRequest('PUT', 'https://udemy-ng-http-85067.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true
    });
    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<Recipe[]>('https://udemy-ng-http-85067.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<Recipe[]>('https://udemy-ng-http-85067.firebaseio.com/recipes.json', {
      observe: 'body',
      responseType: 'json'
    })
      .map(
        (recipes) => {
          for (let recipe of recipes) {
            if (!recipe['ingredients']) { // makes sure that the ingredients property is still there even if there aren't any ingredients.
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
