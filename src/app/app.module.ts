import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({ // defines our application
  declarations: [ // define which components, directives, pipes this module uses
    AppComponent
  ],
  imports: [ // defines which other modules does this module use
    BrowserModule, // contains all features in the common module and some features that are required when the app starts
    AppRoutingModule, // when we import modules here we retrieve all of the exports this module provides
    HttpModule,
    SharedModule,
    ShoppingListModule,
    AuthModule, // all of these imports are added eagerly, ie no lazy loading
    CoreModule // allows us to use the selector for the HeadeComponent in the AppComponent
  ],
  bootstrap: [AppComponent] // defines the root component (where we define starting point of what we see)
})
export class AppModule { } 
