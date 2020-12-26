import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct, NgbDate, NgbCalendar, NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { CouponService } from 'src/app/shared/service/coupon/coupon.service';
import { ExtendedCategories, MainCategories, SubCategories } from '../../products/physical/add-product/data';

@Component({
  selector: 'app-create-coupon',
  templateUrl: './create-coupon.component.html',
  styleUrls: ['./create-coupon.component.scss']
})
export class CreateCouponComponent implements OnInit {
  public generalForm: FormGroup;
  public restrictionForm: FormGroup;
  public model: NgbDateStruct;
  public date: { year: number, month: number };
  public modelFooter: NgbDateStruct;
  public isEdit:boolean = false;
  public loading:boolean = false;
  public selectedId:string = null;
  public curr: Date = new Date();
  public currentDate ={year: this.curr.getFullYear(), month:this.curr.getMonth()+1, day:this.curr.getDate()};

  public mainCategories = MainCategories;
  public subCategories = SubCategories;
  public extendedCategories = ExtendedCategories;

  get main_category() {
    return this.restrictionForm.get('Category');
  }

  get sub_category() {
    return this.restrictionForm.get('SubCategory');
  }

  get extended_category() {
    return this.restrictionForm.get('ExtendedSubCategory');
  }
  constructor(
    private formBuilder: FormBuilder,
    private couponService: CouponService, 
    private calendar: NgbCalendar,
    private activeRoute: ActivatedRoute,
    private router: Router
    ) {
    this.createGeneralForm();
    this.createRestrictionForm();

    if(this.activeRoute.params['value'].id){
      this.selectedId = this.activeRoute.params['value'].id
      this.isEdit = true
    }
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

  createGeneralForm() {
    this.generalForm = this.formBuilder.group({
      couponTitle: ['',Validators.required],
      CouponCode: ['',Validators.required],
      StartDate: [new Date(),Validators.required],
      EndDate: [new Date(),Validators.required],
      AllowFreeShipping: [''],
      Quantity: [1,[Validators.required, Validators.pattern('^[1-9][0-9]*$')]],
      DiscountType: ['',Validators.required],
      PercentageDiscount: ['',[Validators.required,Validators.pattern('^[1-9][0-9]*$')]]
    });
  }

  createRestrictionForm() {
    this.restrictionForm = this.formBuilder.group({
      Category: ['',Validators.required],
      SubCategory: ['',Validators.required],
      ExtendedSubCategory: [''],
      MinSpend: [''],
      MaxSpend: [''],
      PerLimit: [''],
      PerCustomer:['']
    })
  }

  ngOnInit() {}

  createCoupon(){
    console.log('general form', this.generalForm.value)
    console.log('restrictionForm', this.restrictionForm.value)
    let data = {
      ...this.generalForm.value,
      ...this.restrictionForm.value
    }
    // this.loading = true;
    // this.couponService.addCoupon(data).subscribe(res => {
    //   this.loading=false;
    //   this.router.navigate(['/coupons/list-coupons'])
    // },err => {
    //   this.loading=false;
    // })
  }

  editCoupon(){
    console.log('edit general form', this.generalForm.value)
    console.log('edit restrictionForm', this.restrictionForm.value)
  }

}
