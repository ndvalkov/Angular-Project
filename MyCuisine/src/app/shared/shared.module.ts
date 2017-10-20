import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { TitleComponent } from './title/title.component';
import { AsideComponent } from './aside/aside.component';
import {RouterModule} from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SubheaderComponent,
    TitleComponent,
    AsideComponent,
    LoaderComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SubheaderComponent,
    TitleComponent,
    AsideComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
