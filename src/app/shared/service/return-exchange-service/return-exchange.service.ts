import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class ReturnExchangeService {
  constructor(private commonService: CommonService) { }

  getReturnOrders(query) {
    return this.commonService.get(`return-exchange/get-return-exchange-by-seller-id?${query}`);
  }

  getReturnOrderById(uuid) {
    return this.commonService.get(`return-exchange/get-return-exchange-details/${uuid}`);
  }

  updateReturnOrder(id, data) {
    return this.commonService.put(`return-exchange/refund-or-reject-return-exchange/${id}`, data);
  }
}
