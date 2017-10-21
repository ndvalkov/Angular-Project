import {Component, OnInit, Pipe, PipeTransform, ViewChild} from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  user: User = new User();
  @ViewChild('f') form: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit($event) {
    if (this.form.valid) {
      // submt form
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
