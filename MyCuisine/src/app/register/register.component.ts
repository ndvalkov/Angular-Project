import {Component, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {User} from '../models/user.model';
import {DataService} from '../services/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit($event) {
    if (this.form.valid) {
      this.isLoading = true;

      this.dataService
        .register(this.user)
        .then(res => {
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
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
