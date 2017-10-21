import { Injectable } from '@angular/core';
import {NotificationsService} from 'angular2-notifications/dist';

@Injectable()
export class NotificationService {

  constructor(private readonly notificationsService: NotificationsService) { }

  showSuccess(msg: string) {
    this.notificationsService.success('Success!', msg);
  }

  showError(msg: string) {
    this.notificationsService.error('Error!', msg);
  }

  showWarning(msg: string) {
    this.notificationsService.warn('Warning!', msg);
  }
}
