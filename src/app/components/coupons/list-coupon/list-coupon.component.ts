import { Component, OnInit } from '@angular/core';
import { listCouponsDB } from 'src/app/shared/tables/list-coupon';
import { CommonService } from 'src/app/shared/service/common.service';
import { Router } from '@angular/router';
import { CouponService } from 'src/app/shared/service/coupon/coupon.service';
import { TranslateService } from '@ngx-translate/core';
import { AllCoupons } from '../../../shared/interfaces/coupon/coupon';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import * as moment from 'moment';

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
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 10,
    TotalCount: 0,
    TotalPages: 1,
  };
  pageSizeOptions: number[] = [5, 10, 25, 50];
  constructor(
    private router: Router,
    private couponService: CouponService,
    public translate: TranslateService,
    private cs: CommonService
  ) {
    // this.digital_categories = listCouponsDB.list_coupons;
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  ngOnInit() {
    this.fetchCoupons();
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchCoupons();
  }

  fetchCoupons() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    this.digital_categories = []
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.couponService.getCoupon(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          if (res.body) {
            this.digital_categories = res.body;
            this.pagination = JSON.parse(res.headers.get('X-Pagination'));
          }
        }
      }
      //  ,err => {
      //   this.loading = false;
      //  }
    );
  }

  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }

  onEdit(val) {
    console.log('row click', val);
    this.router.navigate(['/coupons/edit-coupon/', val]);
  }

  onDelete(val) {
    console.log('row click', val);
    this.couponService.deleteCoupon(val).subscribe(res => {
      if (res) {
        this.fetchCoupons();
      }
    })
  }

  setPage(page) {
    console.log('page--', page);
  }
}
