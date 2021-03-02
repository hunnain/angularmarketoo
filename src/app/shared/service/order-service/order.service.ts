import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private commonService: CommonService) { }

  getOrders(query) {
    return this.commonService.get(`order/getOrdersBySeller?${query}`);
  }

  getOrderById(uuid) {
    return this.commonService.get(`order/getorderbyid/${uuid}`);
  }

  updateOrder(id, data) {
    return this.commonService.put(`order/${id}`, data);
  }

  updateShippingMethod(data) {
    return this.commonService.post(`order/update-shipping-details`, data);
  }
}
