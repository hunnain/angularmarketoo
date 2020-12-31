import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private commonService: CommonService) {}

  public getToken(): string {
    return localStorage.getItem('token');
  }

  login(data) {
    return this.commonService.post('seller/login', data);
  }
  signUp(data) {
    return this.commonService.post('seller/signUp', data);
  }

  refreshToken(data){
    return this.commonService.post('token/refresh',data);
  }

  logout() {
    return this.commonService.post('token/revoke', {});
  }
}
