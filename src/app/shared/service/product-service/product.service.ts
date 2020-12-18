import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private commonService: CommonService) {}

  getProduct(query) {
    return this.commonService.get(`product?${query}`);
  }

  addProduct(data) {
    return this.commonService.post('product', data);
  }

  updateProduct(id, data) {
    return this.commonService.put(`product${id}`, data);
  }

  deleteProduct(id) {
    return this.commonService.delete(`product/${id}`);
  }
}
