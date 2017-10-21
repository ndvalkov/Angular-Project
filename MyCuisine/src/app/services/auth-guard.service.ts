import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import {DataService} from './data.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private readonly dataService: DataService,
    private readonly router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasUser = this.dataService.hasUser();
    if (!hasUser) {
      this.router.navigateByUrl('/');
    }

    return hasUser;
  }
}
