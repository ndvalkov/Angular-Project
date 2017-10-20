import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SubheaderComponent } from './subheader/subheader.component';
import { TitleComponent } from './title/title.component';
import { AsideComponent } from './aside/aside.component';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SubheaderComponent,
    TitleComponent,
    AsideComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SubheaderComponent,
    TitleComponent,
    AsideComponent
  ]
})
export class SharedModule { }
