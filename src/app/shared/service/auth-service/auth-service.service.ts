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
    return this.commonService.post('token/refresh', data).pipe(
      map((res) => {
        this.commonService.isLoading.next(false);
        console.log('auth service--', res);
        this.writeToLS('accessToken', res['accessToken']);
        this.writeToLS('refreshToken', res['refreshToken']);
      })
    );
  }

  logout() {
    return this.commonService.post('token/revoke', {}).pipe(map((res) => {
      console.log("log1", res)
      if (res) {
        console.log("log2", res)
        localStorage.clear();
        this.commonService.isLoading.next(false);
      }
    }));
  }

  updateProfile(data) {
    return this.commonService.post('seller/editProfile', data);
  }

  updateProfilePic(data) {
    return this.commonService.post('seller/updateProfilePic', data);
  }

  updateProfileSettings(data) {
    return this.commonService.post('seller/updateProfileSettings', data);
  }

  deactivateAccount(deactiveEnum) {
    return this.commonService.post(`seller/deactivateAccount/${deactiveEnum}`, {});
  }

  deleteAccount(deleteEnum) {
    return this.commonService.post(`seller/deleteAccount/${deleteEnum}`, {});
  }
}
