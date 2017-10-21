import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '../models/user.model';
import {DataService} from '../services/data.service';
import {NotificationService} from '../services/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  user: User = new User();
  @ViewChild('f') form: any;
  isLoading: boolean;
  options = {
    position: ['bottom', 'right'],
    timeOut: 2000,
    lastOnBottom: true
  };

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService,
              private readonly router: Router) {
  }

  ngOnInit() {
  }

  onSubmit($event) {
    if (this.form.valid) {
      this.isLoading = true;

      this.dataService
        .register(this.user)
        .then(res => {
          this.isLoading = false;
          this.notificationService.showSuccess('Registered successfully');
          this.form.reset();
        })
        .catch(err => {
          this.isLoading = false;
          this.notificationService.showError(err._body);
        });
    }
  }

  destroyed($event) {
    if ($event.type !== 'error') {
      this.router.navigate(['/home']);
    }
  }
}
