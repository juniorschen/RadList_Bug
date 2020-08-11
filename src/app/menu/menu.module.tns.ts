import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { MenuComponent } from '@src/app/menu/menu.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MenuComponent }
];

@NgModule({
  declarations: [MenuComponent],
  imports: [
    NativeScriptCommonModule,
    NativeScriptRouterModule.forChild(routes)
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class MenuModule { }
