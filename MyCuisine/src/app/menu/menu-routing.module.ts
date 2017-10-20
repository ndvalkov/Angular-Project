import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'breakfast', pathMatch: 'full' },
  { path: 'breakfast', component: MenuComponent },
  { path: 'lunch', component: MenuComponent },
  { path: 'dinner', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
