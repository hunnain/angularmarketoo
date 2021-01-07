import { Component, OnInit } from '@angular/core';
import { listCouponsDB } from 'src/app/shared/tables/list-coupon';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/shared/service/coupon/coupon.service';
import { TranslateService } from '@ngx-translate/core';
import { AllCoupons } from '../../../shared/interfaces/coupon/coupon';
import { Paginate } from 'src/app/shared/interfaces/pagination';



@Component({
  selector: 'app-list-coupon',
  templateUrl: './list-coupon.component.html',
  styleUrls: ['./list-coupon.component.scss'],
})
export class ListCouponComponent implements OnInit {
  public digital_categories = [];
  public selected = [];
  public loading: boolean = false;
  public pagination: Paginate = {
    TotalCount: 0,
    PageSize: 10,
    CurrentPage: 0,
    HasNext: false,
    HasPrevious: false,
    TotalPages: 0
  };

  constructor(
    private router: Router,
    private couponService: CouponService,
    public translate: TranslateService,
    private cs: CommonService
  ) {
    // this.digital_categories = listCouponsDB.list_coupons;
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    })
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  ngOnInit() {
    this.fetchCoupons();
  }

  fetchCoupons() {
    this.loading = true;
    let query = `PageSize=10&PageNumber=1`;
    this.couponService.getCoupon(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.digital_categories = res.body;
          console.log('coupon-res', res.headers.get('x-pagination'));
          this.pagination = JSON.parse(res.headers.get('X-Pagination'));
          console.log("pagination", this.pagination)
        }
      }
      //  ,err => {
      //   this.loading = false;
      //  }
    );
  }

  onEdit(val) {
    console.log('row click', val);
    this.router.navigate(['/coupons/edit-coupon/', val]);
  }

  onDelete(val) {
    console.log('row click', val);
  }

  setPage(page) {
    console.log("page--", page)
  }
}
