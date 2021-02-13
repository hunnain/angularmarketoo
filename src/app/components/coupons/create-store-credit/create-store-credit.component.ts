import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';
import { CouponService } from 'src/app/shared/service/coupon/coupon.service';

@Component({
  selector: 'app-create-store-credit',
  templateUrl: './create-store-credit.component.html',
  styleUrls: ['./create-store-credit.component.scss'],
})
export class CreateStoreCreditComponent implements OnInit {
  public storeCreditForm: FormGroup;
  public isEdit: boolean = false;
  public loading: boolean = false;
  public fetching: boolean = false;
  public selectedId: string = null;


  constructor(
    private formBuilder: FormBuilder,
    private storeCreditService: CouponService,
    private cs: CommonService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.createStoreCreditForm();

    if (this.activeRoute.params['value'].id) {
      this.selectedId = this.activeRoute.params['value'].id;
      this.isEdit = true;
      // this.fetchCouponByCode(this.selectedId);
    }

    this.cs.isLoading.subscribe((loading) => {
      console.log(loading);

      this.loading = loading;
      this.fetching = loading;
    });
  }

  fetchCouponByCode(code) {
    this.fetching = true;
    // this.storeCreditService.getCouponByCode(code).subscribe((res) => {
    //   if (res) {
    //     console.log('fetch res---', res);
    //     this.cs.isLoading.next(false);
    //     this.fetching = false;
    //   }
    // });
  }

  createStoreCreditForm() {
    this.storeCreditForm = this.formBuilder.group({
      sendAmount: ['', Validators.required],
      reason: ['', Validators.required],
      // recivers: ['', Validators.required],
      notifyRecivers: [false],
    });
  }

  ngOnInit() { }

  createCredit() {
    let data = { ...this.storeCreditForm.value };
    this.loading = true;
    console.log(data);
    this.storeCreditService.addStoreCredit(data).subscribe((res) => {
      if (res) {
        this.cs.isLoading.next(false);
        this.loading = false;
        // this.router.navigate(['/coupons/list-coupons']);
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

}
