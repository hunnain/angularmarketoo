import { Component, OnInit } from '@angular/core';
import { listCouponsDB } from 'src/app/shared/tables/list-coupon';
import { CommonService } from 'src/app/shared/service/common.service';
import { CommonErrorService } from 'src/app/shared/service/error/common-error.service';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/shared/service/coupon/coupon.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.scss']
})
export class ListCouponComponent implements OnInit {

  public digital_categories = [];
  public selected = [];
  public loading:boolean = false;

  constructor(private router: Router, private couponService: CouponService, public translate: TranslateService) {
    this.digital_categories = listCouponsDB.list_coupons;
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  ngOnInit() {
      this.fetchCoupons();
   }

   fetchCoupons(){
     let user = JSON.parse(localStorage.getItem('userInfo'));
     console.log("user info---",user)
     let sellerId="";
     if(user){
      sellerId = user['sellerUuid']
     }
     this.loading = true;
     let query = `PageSize=1&PageNumber=1`;
     this.couponService.getCoupon(sellerId,query).subscribe(res => {
        if(res){
          this.loading = false;
          console.log('coupon-res',res);
        }
     },err => {
      this.loading = false;
     })
   }

   onEdit(val){
     console.log('row click',val)
     this.router.navigate(['/coupons/edit-coupon/',val])
   }   

   onDelete(val){
     console.log('row click',val)
   }   


}
