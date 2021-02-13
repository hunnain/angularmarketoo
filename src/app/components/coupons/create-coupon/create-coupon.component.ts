import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NgbDateStruct,
  NgbDate,
  NgbCalendar,
  NgbDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from 'src/app/shared/service/common.service';
import { CouponService } from 'src/app/shared/service/coupon/coupon.service';
import {
  ExtendedCategories,
  MainCategories,
  SubCategories,
  SendToOptions,
  getValueOfCate,
  getIdOfCate
} from '../../products/physical/add-product/data';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss'],
})
export class CreateCouponComponent implements OnInit {
  public generalForm: FormGroup;
  public restrictionForm: FormGroup;
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
  public selectedLang: string = 'en';
  public mainCategories = MainCategories;
  public sendOptions = SendToOptions(this.selectedLang);
  public subCategories = SubCategories;
  public extendedCategories = ExtendedCategories;

  public keys = Object.keys

  get send_to() {
    return this.restrictionForm.get('category');
  }

  get startDate() {
    return this.generalForm.get('startDate');
  }
  get main_category() {
    return this.restrictionForm.get('category');
  }

  get sub_category() {
    return this.restrictionForm.get('subCategory');
  }

  get extended_category() {
    return this.restrictionForm.get('extendedSubCategory');
  }
  constructor(
    private formBuilder: FormBuilder,
    private couponService: CouponService,
    private cs: CommonService,
    private calendar: NgbCalendar,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    this.createGeneralForm();
    this.createRestrictionForm();
    this.selectedLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((res) => {
      this.selectedLang = res.lang;
      this.sendOptions = SendToOptions(this.selectedLang);
    });
    if (this.activeRoute.params['value'].id) {
      this.selectedId = this.activeRoute.params['value'].id;
      this.isEdit = true;
      this.fetchCouponByCode(this.selectedId);
    }

    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
      this.fetching = loading;
    });
  }

  fetchCouponByCode(code) {
    this.fetching = true;
    this.couponService.getCouponByCode(code).subscribe((res) => {
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
          amtOrPercentage,
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
          amtOrPercentage,
          startDate: this.formatDate(startDate, true),
          endDate: this.formatDate(endDate, true),
        };
        this.generalForm.setValue(general);
        const { category, subCategory, extendedSubCategory } = rest;
        this.restrictionForm.patchValue({
          ...rest,
          ...getIdOfCate(category, subCategory, extendedSubCategory)
        });
        console.log(
          'general form invalid',
          this.generalForm.invalid,
          this.generalForm
        );
        console.log(
          'restrict form invalid',
          this.restrictionForm.invalid,
          this.restrictionForm
        );
      }
    });
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  createGeneralForm() {
    this.generalForm = this.formBuilder.group({
      couponTitle: ['', Validators.required],
      couponCode: ['', Validators.required],
      startDate: [{}, Validators.required],
      endDate: [{}, Validators.required],
      allowFreeShipping: [false],
      quantity: [1, [Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      discountType: ['', Validators.required],
      amtOrPercentage: [
        '',
        [Validators.required, Validators.pattern('^[1-9][0-9]*$')],
      ],
    });
  }

  createRestrictionForm() {
    this.restrictionForm = this.formBuilder.group({
      category: ['', Validators.required],
      subCategory: ['', Validators.required],
      extendedSubCategory: [''],
      minSpend: [''],
      // perLimit: [''],
      // perCustomer: [''],
      usageLimit: [''],
      sendTo: [''],
      notifyRecivers: [false],
    });
  }

  ngOnInit() { }

  createCoupon() {
    console.log('general form', this.generalForm.value);
    // console.log('restrictionForm', this.restrictionForm.value)
    const { category, subCategory, extendedSubCategory, ...remaining } = this.restrictionForm.value;
    let data = {
      ...this.generalForm.value,
      startDate: this.formatDate(this.generalForm.value.startDate),
      endDate: this.formatDate(this.generalForm.value.endDate),
      ...remaining,
      ...getValueOfCate(category, subCategory, extendedSubCategory)
    };
    this.loading = true;
    console.log(data);
    this.couponService.addCoupon(data).subscribe((res) => {
      if (res) {
        this.cs.isLoading.next(false);
        this.loading = false;
        this.router.navigate(['/coupons/list-coupons']);
      }
    });
  }

  editCoupon() {
    // console.log('general form', this.generalForm.value)
    // console.log('restrictionForm', this.restrictionForm.value)
    const { category, subCategory, extendedSubCategory, ...remaining } = this.restrictionForm.value;
    let data = {
      ...this.generalForm.value,
      startDate: this.formatDate(this.generalForm.value.startDate),
      endDate: this.formatDate(this.generalForm.value.endDate),
      ...remaining,
      ...getValueOfCate(category, subCategory, extendedSubCategory)
    };
    this.loading = true;
    console.log(data);
    this.couponService.updateCoupon(this.selectedId, data).subscribe((res) => {
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
