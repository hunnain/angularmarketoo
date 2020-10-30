import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCouponComponent } from './list-coupon/list-coupon.component';
import { CreateCouponComponent } from './create-coupon/create-coupon.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-coupons',
        component: ListCouponComponent,
        data: {
          title: "List Coupons",
          breadcrumb: "List Coupons"
        }
      },
      {
        path: 'create-coupons',
        component: CreateCouponComponent,
        data: {
          title: "Create Coupon",
          breadcrumb: "Create Coupons"
        }
      },
      {
        path: 'edit-coupon/:id',
        component: CreateCouponComponent,
        data: {
          title: "Edit Coupon",
          breadcrumb: "Edit Coupons"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CouponsRoutingModule { }
