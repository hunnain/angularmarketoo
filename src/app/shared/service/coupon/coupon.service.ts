import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private commonService: CommonService) { }

  getCoupon(query) {
    return this.commonService.get(`seller/get-coupons?${query}`);
  }

  getCouponByCode(code) {
    return this.commonService.get(`seller/get-coupon/${code}`);
  }

  addCoupon(data) {
    return this.commonService.post('seller/create-coupon', data);
  }

  updateCoupon(id, data) {
    return this.commonService.put(`seller/update-coupon/${id}`, data);
  }

  deleteCoupon(id) {
    return this.commonService.delete(`seller/delete-coupon/${id}`);
  }


  // Store credit apis //
  addStoreCredit(data) {
    return this.commonService.post('seller/create-storecredit', data);
  }

}
