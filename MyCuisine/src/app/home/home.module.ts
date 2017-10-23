import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {SimpleNotificationsModule} from 'angular2-notifications/dist';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SimpleNotificationsModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule {

}
