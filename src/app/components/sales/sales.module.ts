import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SalesRoutingModule } from './sales-routing.module';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

@NgModule({
  declarations: [OrdersComponent,OrderDetailComponent, TransactionsComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule
  ]
})
export class SalesModule { }
