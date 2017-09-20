import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loading implemented at the point at which we visit this route
    { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}) // forRoot should only be used in the root routing module
    ], // preloadingStrategy allows us to preload modules that are lazy loading
    exports: [RouterModule] // what we import in app.module
})

export class AppRoutingModule {

}