import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map, subscribeOn } from 'rxjs/operators';

import { AuthServiceService } from '../service/auth-service/auth-service.service';
import { CommonService } from '../service/common.service';
import { NotificationService } from '../service/notification/notification.service';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(
    private cs: CommonService,
    private auth: AuthServiceService,
    private router: Router,
    private ns: NotificationService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    console.log('auth guard');
    let accessToken = this.cs.getAccessToken();
    let refreshToken = this.cs.getRefreshToken();
    if (refreshToken && accessToken) {
      let data = { accessToken, refreshToken };
      return this.auth
        .refreshToken(data)
        .mapTo(true)
        .catch((err) => {
          console.log(err);
          this.cs.isLoading.next(false);
          this.router.navigate(['auth/login']);
          return Observable.of(false);
        });
      // .subscribe(res => {
      //   console.log("res---", res, next['_routerState'].url);
      //   if (res) {
      //     this.router.navigate([next['_routerState'].url])
      //     return Observable.of(true);
      //   }
      //   return Observable.of(false);
      // })
      // .subscribe(res => {
      //   console.log("guard res", res)
      //   this.auth.writeToLS('accessToken', res['accessToken']);
      //   this.auth.writeToLS('refreshToken', res['refreshToken']);
      //   return true;
      // }, err => {
      //   console.log("guard error", err)
      //   let msg = this.parseServerError(err.error)
      //   this.ns.showError(msg ? msg : err.message);
      //   this.router.navigate(['auth/login'])
      //   return false;
      // });
      // return true
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
    // return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }

  parseServerError(error) {
    if (error && error.hasOwnProperty('errors')) {
      let { errors } = error;
      let keys = Object.keys(errors);
      return errors[keys[0]][0];
    } else {
      return error.Message;
    }
  }
}
