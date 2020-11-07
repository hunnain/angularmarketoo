import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { ReturnExchanngeOrderComponent } from './return-exchange-orders/return-exchange-orders.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ReturnExchanngeOrderComponent,
        data: {
          title: "Return & Exchange",
          breadcrumb: "Return & Exchange"
        }
      },
      {
        path: 'view-detail/:id',
        component: ViewDetailComponent,
        data: {
          title: "View Detail",
          breadcrumb: "View Detail"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnExchangeRoutingModule { }
