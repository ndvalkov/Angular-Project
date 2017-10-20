import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HomeModule} from './home/home.module';
import {MenuModule} from './menu/menu.module';
import {PostsModule} from './posts/posts.module';
import {LocationModule} from './location/location.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    MenuModule,
    PostsModule,
    LocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
