import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private commonService: CommonService) { }

  writeToLS(key, value) {
    localStorage.setItem(key, value);
  }

  login(data) {
    return this.commonService.post('seller/login', data);
  }
  signUp(data) {
    return this.commonService.post('seller/signUp', data);
  }

  refreshToken(data) {
    return this.commonService.post('token/refresh', data)
      .pipe(
        map(res => {
          console.log("auth service--", res)
          this.writeToLS('accessToken', res['accessToken']);
          this.writeToLS('refreshToken', res['refreshToken']);
        })
      );
  }

  logout() {
    return this.commonService.post('token/revoke', {});
  }
}
