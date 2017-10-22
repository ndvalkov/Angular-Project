import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {LoaderComponent} from './shared/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('loader') loader: LoaderComponent;

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.loader.isLoading = false;
    }, 1000);
  }
}
