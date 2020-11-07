import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ReturnExchangeRoutingModule } from './return-exchange-routing.module';
import { ReturnExchanngeOrderComponent } from './return-exchange-orders/return-exchange-orders.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ReturnExchanngeOrderComponent,ViewDetailComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    ReturnExchangeRoutingModule,
    Ng2SmartTableModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class ReturnExchangeModule { }
