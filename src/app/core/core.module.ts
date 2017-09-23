import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { AuthInterceptor } from '../shared/auth.interceptor';
import { LoggingInterceptor } from '../shared/logging.interceptor';

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
      RecipeService, // good practice to keep services in a core module, to keep app module lean
      DataStorageService,
      AuthService,
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, // tells angular to use the interceptor
      {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true} // this will happen after AuthInterceptor
    ]
})
export class CoreModule {

}
