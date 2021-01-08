import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';
import { CreateStoreCreditComponent } from './create-store-credit/create-store-credit.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-coupons',
        component: ListCouponComponent,
        data: {
          title: 'List Coupons',
          breadcrumb: 'List Coupons',
        },
      },
      {
        path: 'create-coupons',
        component: CreateCouponComponent,
        data: {
          title: 'Create Coupon',
          breadcrumb: 'Create Coupons',
        },
      },
      {
        path: 'edit-coupon/:id',
        component: CreateCouponComponent,
        data: {
          title: 'Edit Coupon',
          breadcrumb: 'Edit Coupons',
        },
      },
      {
        path: 'create-store-credit',
        component: CreateStoreCreditComponent,
        data: {
          title: 'Create Store Credit',
          breadcrumb: 'Create Store Credit',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CouponsRoutingModule {}
