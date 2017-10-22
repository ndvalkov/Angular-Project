import {AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
import {LoaderComponent} from './shared/loader/loader.component';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('loader') loader: LoaderComponent;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.loader.isLoading = false;
    }, 1000);
  }
}
