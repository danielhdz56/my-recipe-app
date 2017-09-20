import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DropdownDirective } from "./dropdown.directive";

@NgModule({
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective // this allows us to import this shared module and use the DropdownDirective across multiple modules
    ]
})
export class SharedModule {

}