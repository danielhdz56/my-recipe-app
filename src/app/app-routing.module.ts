import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loading implemented at the point at which we visit this route
    { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) // forRoot should only be used in the root routing module
    ],
    exports: [RouterModule] // what we import in app.module
})

export class AppRoutingModule {

}