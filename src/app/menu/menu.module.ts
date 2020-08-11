import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '@src/app/menu/menu.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MenuComponent }
];

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MenuModule { }
