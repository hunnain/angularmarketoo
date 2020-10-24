import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: "Orders",
          breadcrumb: "Orders"
        }
      },
      {
        path: 'order-detail/:id',
        component: OrderDetailComponent,
        data: {
          title: "Order Detail",
          breadcrumb: "Order Detail"
        }
      },
      {
        path: 'transactions',
        component: TransactionsComponent,
        data: {
          title: "Transactions",
          breadcrumb: "Transactions"
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
