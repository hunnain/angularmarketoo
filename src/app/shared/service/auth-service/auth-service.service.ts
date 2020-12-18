import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private commonService: CommonService) {}

  login(data) {
    return this.commonService.post('seller/login', data);
  }
  signUp(data) {
    return this.commonService.post('/seller/signUp', data);
  }
}
