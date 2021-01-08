import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CouponsRoutingModule } from './coupons-routing.module';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

@NgModule({
  declarations: [ListCouponComponent, CreateCouponComponent, CreateStoreCreditComponent],
  imports: [
    CommonModule,
    CouponsRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    SharedModule,
  ],
})
export class CouponsModule {}
