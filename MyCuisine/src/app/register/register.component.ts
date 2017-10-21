import {Component, OnInit, Pipe, PipeTransform, ViewChild, ViewContainerRef} from '@angular/core';
import {User} from '../models/user.model';
import {DataService} from '../services/data.service';
import {NotificationService} from '../services/notification.service';

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
    position: ['bottom', 'left'],
    timeOut: 2000,
    lastOnBottom: true
  };

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService) {
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
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err.body);
          this.notificationService.showError(err.message);
        });

      this.form.reset();
    }
  }
}

@Pipe({name: 'maskPassword'})
export class MaskPasswordPipe implements PipeTransform {
  transform(value: FormData): FormData {
    const count = value.password ? value.password.length : 0;
    value.password = '*'.repeat(count);
    return value;
  }
}

export class FormData {
  constructor(public email, public username, public password) {
  }
}
