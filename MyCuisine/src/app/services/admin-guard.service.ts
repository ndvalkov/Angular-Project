import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {DataService} from './data.service';

@Injectable()
export class AdminGuardService implements CanActivate {
  constructor(
    private readonly dataService: DataService,
    private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.dataService.getUser();
    // TODO: change
    if (currentUser !== 'niki') {
      this.router.navigateByUrl('/');
    } else {
      return true;
    }
  }
}
