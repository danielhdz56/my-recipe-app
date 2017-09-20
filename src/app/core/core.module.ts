import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app-routing.module";



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
    ]
})
export class CoreModule {

}