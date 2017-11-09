import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, routs: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }

}
