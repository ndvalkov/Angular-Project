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
import {CapitalizePipe} from './pipes/capitalize.pipe';
import {MaskPasswordPipe} from './pipes/mask-password.pipe';
import { SearchComponent } from './search/search.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    RouterModule,
    FormsModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SubheaderComponent,
    TitleComponent,
    AsideComponent,
    LoaderComponent,
    CapitalizePipe,
    MaskPasswordPipe,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    SubheaderComponent,
    TitleComponent,
    AsideComponent,
    LoaderComponent,
    CapitalizePipe,
    MaskPasswordPipe
  ]
})
export class SharedModule { }
