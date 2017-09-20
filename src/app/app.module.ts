import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './recipes/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';

@NgModule({ // defines our application
  declarations: [ // define which components, directives, pipes this module uses
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [ // defines which other modules does this module use
    BrowserModule, // contains all features in the common module and some features that are required when the app starts
    AppRoutingModule, // when we import modules here we retrieve all of the exports this module provides
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule // all of these imports are added eagerly, ie no lazy loading
  ],
  providers: [ // defines which services this module uses through the whole application
    ShoppingListService, 
    RecipeService, // good practice to keep services in the app module
    DataStorageService, 
    AuthService, 
    AuthGuardService
  ],
  bootstrap: [AppComponent] // defines the root component (where we define starting point of what we see)
})
export class AppModule { } 
