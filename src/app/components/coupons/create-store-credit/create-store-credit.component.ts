import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgbDateStruct,
  NgbDate,
  NgbCalendar,
  NgbDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from 'src/app/shared/service/common.service';
import { CouponService } from 'src/app/shared/service/coupon/coupon.service';
import {
  ExtendedCategories,
  MainCategories,
  SubCategories,
} from '../../products/physical/add-product/data';

@Component({
  selector: 'app-create-store-credit',
  templateUrl: './create-store-credit.component.html',
  styleUrls: ['./create-store-credit.component.scss'],
})
export class CreateStoreCreditComponent implements OnInit {
  // public generalForm: FormGroup;
  public storeCreditForm: FormGroup;
  public model: NgbDateStruct;
  public date: { year: number; month: number };
  public modelFooter: NgbDateStruct;
  public isEdit: boolean = false;
  public loading: boolean = false;
  public fetching: boolean = false;
  public selectedId: string = null;
  public curr: Date = new Date();
  public currentDate = {
    year: this.curr.getFullYear(),
    month: this.curr.getMonth() + 1,
    day: this.curr.getDate(),
  };

  public mainCategories = MainCategories;
  public subCategories = SubCategories;
  public extendedCategories = ExtendedCategories;

  constructor(
    private formBuilder: FormBuilder,
    private storeCreditService: CouponService,
    private cs: CommonService,
    private calendar: NgbCalendar,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    // this.createGeneralForm();
    this.createStoreCreditForm();

    if (this.activeRoute.params['value'].id) {
      this.selectedId = this.activeRoute.params['value'].id;
      this.isEdit = true;
      this.fetchCouponByCode(this.selectedId);
    }

    this.cs.isLoading.subscribe((loading) => {
      console.log(loading);

      this.loading = loading;
      this.fetching = loading;
    });
  }

  fetchCouponByCode(code) {
    this.fetching = true;
    this.storeCreditService.getCouponByCode(code).subscribe((res) => {
      if (res) {
        console.log('fetch res---', res);
        this.cs.isLoading.next(false);
        this.fetching = false;
        const {
          couponTitle,
          couponCode,
          startDate,
          endDate,
          allowFreeShipping,
          quantity,
          discountType,
          percentageDiscount,
          couponId,
          seller,
          sellerId,
          ...rest
        } = res.body;
        let general = {
          couponTitle,
          couponCode,
          allowFreeShipping,
          quantity,
          discountType,
          percentageDiscount,
          startDate: this.formatDate(startDate, true),
          endDate: this.formatDate(endDate, true),
        };
        // this.generalForm.setValue(general);
        this.storeCreditForm.setValue(rest);
        // console.log(
        //   'general form invalid',
        //   this.generalForm.invalid,
        //   this.generalForm
        // );
        console.log(
          'restrict form invalid',
          this.storeCreditForm.invalid,
          this.storeCreditForm
        );
      }
    });
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  // createGeneralForm() {
  //   this.generalForm = this.formBuilder.group({
  //     couponTitle: ['', Validators.required],
  //     couponCode: ['', Validators.required],
  //     startDate: [{}, Validators.required],
  //     endDate: [{}, Validators.required],
  //     allowFreeShipping: [false],
  //     quantity: [1, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
  //     discountType: ['', Validators.required],
  //     percentageDiscount: [
  //       '',
  //       [Validators.required, Validators.pattern('^[1-9][0-9]*$')],
  //     ],
  //   });
  // }

  createStoreCreditForm() {
    this.storeCreditForm = this.formBuilder.group({
      sendAmount: ['', Validators.required],
      reason: ['', Validators.required],
      // recivers: ['', Validators.required],
      notifyRecivers: [false],
    });
  }

  ngOnInit() {}

  createCoupon() {
    // console.log('general form', this.generalForm.value);
    // console.log('storeCreditForm', this.storeCreditForm.value)
    let data = {
      // ...this.generalForm.value,
      // startDate: this.formatDate(this.generalForm.value.startDate),
      // endDate: this.formatDate(this.generalForm.value.endDate),
      ...this.storeCreditForm.value,
    };
    this.loading = true;
    console.log(data);
    this.storeCreditService.addCoupon(data).subscribe((res) => {
      if (res) {
        this.cs.isLoading.next(false);
        this.loading = false;
        this.router.navigate(['/coupons/list-coupons']);
      }
    });
  }

  editCoupon() {
    // console.log('general form', this.generalForm.value)
    // console.log('storeCreditForm', this.storeCreditForm.value)
    let data = {
      // ...this.generalForm.value,
      // startDate: this.formatDate(this.generalForm.value.startDate),
      // endDate: this.formatDate(this.generalForm.value.endDate),
      ...this.storeCreditForm.value,
    };
    this.loading = true;
    console.log(data);
    this.storeCreditService
      .updateCoupon(this.selectedId, data)
      .subscribe((res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.router.navigate(['/coupons/list-coupons']);
        }
      });
  }

  formatDate(date, inverse = false) {
    let newDate = inverse ? {} : new Date();
    if (inverse) {
      let curr: Date = new Date(date);
      newDate = {
        year: curr.getFullYear(),
        month: curr.getMonth() + 1,
        day: curr.getDate(),
      };
      return newDate;
    } else {
      let { year, month, day } = date;
      newDate = new Date(year, month - 1, day, 0, 0, 0, 0);
      return newDate;
    }
  }
}
