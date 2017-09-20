import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({ // defines our application
  declarations: [ // define which components, directives, pipes this module uses
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    SignupComponent,
    SigninComponent
  ],
  imports: [ // defines which other modules does this module use
    BrowserModule, // contains all features in the common module and some features that are required when the app starts
    AppRoutingModule, // when we import modules here we retrieve all of the exports this module provides
    HttpModule,
    FormsModule,
    RecipesModule
  ],
  providers: [ // defines which services this module uses through the whole application
    ShoppingListService, 
    RecipeService, 
    DataStorageService, 
    AuthService, 
    AuthGuardService
  ],
  bootstrap: [AppComponent] // defines the root component (where we define starting point of what we see)
})
export class AppModule { } 
