import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {MaskPasswordPipe, RegisterComponent} from './register/register.component';

import {DataService} from './services/data.service';
import {NotificationService} from './services/notification.service';

import {HomeModule} from './home/home.module';
import {MenuModule} from './menu/menu.module';
import {PostsModule} from './posts/posts.module';
import {LocationModule} from './location/location.module';
import {SharedModule} from './shared/shared.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    MaskPasswordPipe,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule,
    HomeModule,
    MenuModule,
    PostsModule,
    LocationModule,
    SharedModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
