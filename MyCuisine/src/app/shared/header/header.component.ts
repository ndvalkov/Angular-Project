import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isCollapsed: boolean;
  hasUser: boolean;
  currentUsername: string;
  isAdmin: boolean;

  options = {
    position: ['bottom', 'right'],
    timeOut: 1000,
    lastOnBottom: true
  };

  private paramsSub: Subscription;

  constructor(private readonly dataService: DataService,
              private readonly router: Router,
              private readonly notificationService: NotificationService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.updateUserInfo();
    this.paramsSub = this.route.queryParams.subscribe(val => this.refreshHeader(val));
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

  signOut($event) {
    this.dataService
      .signOut()
      .then(() => {
        this.updateUserInfo();
        this.isAdmin = false;
        this.notificationService.showSuccess(`Signed out ${this.currentUsername}`);
      });
  }

  destroyed($event) {
    if ($event.type !== 'error') {
      this.router.navigate(['/home']);
    }
  }

  refreshHeader(val) {
    if (val.refresh) {
      this.updateUserInfo();
    }
  }

  updateUserInfo() {
    this.hasUser = this.dataService.hasUser();
    if (this.hasUser) {
      this.currentUsername = this.dataService.getUser();
      this.isAdmin = this.dataService.isAdmin();
    }
  }
}
