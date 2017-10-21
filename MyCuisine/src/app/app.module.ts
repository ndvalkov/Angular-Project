import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';

import {DataService} from './services/data.service';
import {NotificationService} from './services/notification.service';
import {AuthGuardService} from './services/auth-guard.service';

import {CapitalizePipe} from './shared/pipes/capitalize.pipe';
import {MaskPasswordPipe} from './shared/pipes/mask-password.pipe';

import {HomeModule} from './home/home.module';
import {MenuModule} from './menu/menu.module';
import {PostsModule} from './posts/posts.module';
import {LocationModule} from './location/location.module';
import {SharedModule} from './shared/shared.module';

import {SimpleNotificationsModule} from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MaskPasswordPipe,
    CapitalizePipe
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
  providers: [DataService, NotificationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
