import { Component, OnInit } from '@angular/core';
import { listCouponsDB } from 'src/app/shared/tables/list-coupon';
import { CommonService } from 'src/app/shared/service/common.service';
import { CommonErrorService } from 'src/app/shared/service/error/common-error.service';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.scss']
})
export class ListCouponComponent implements OnInit {

  public digital_categories = [];
  public selected = [];

  constructor() {
    this.digital_categories = listCouponsDB.list_coupons;
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  ngOnInit() {

   }

   onSelectRow(val){
     console.log('row click',val)
   }   


}
