import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private commonService: CommonService) {}

  getCoupon(id,query) {
    return this.commonService.get(`coupon/GetCouponBySeller/${id}?${query}`);
  }

  addCoupon(data) {
    return this.commonService.post('coupon', data);
  }

  updateCoupon(id, data) {
    return this.commonService.put(`coupon${id}`, data);
  }

  deleteCoupon(id) {
    return this.commonService.delete(`coupon/${id}`);
  }
}
