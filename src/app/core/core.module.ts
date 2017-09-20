import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { RecipeService } from "../recipes/recipe.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule, // in the SharedModule we expose the dropdown directive which we use in out header Component
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    providers: [ // defines which services this module uses through the whole application
      ShoppingListService, 
      RecipeService, // good practice to keep services in a core module, to keep app module lean
      DataStorageService, 
      AuthService
    ]
})
export class CoreModule {

}