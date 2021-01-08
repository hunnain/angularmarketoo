import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private commonService: CommonService) {}

  getProduct(query) {
    return this.commonService.get(`product/seller?${query}`);
  }

  getProductById(uuid) {
    return this.commonService.get(`product/getproductbyid/${uuid}`);
  }

  addProduct(data) {
    return this.commonService.post('product', data);
  }

  updateProduct(uuid, data) {
    return this.commonService.put(`product/${uuid}`, data);
  }

  deleteProduct(id) {
    return this.commonService.delete(`product/${id}`);
  }
}
