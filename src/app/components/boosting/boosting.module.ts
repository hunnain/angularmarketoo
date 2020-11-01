import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BoostingRoutingModule } from './boosting-routing.module';
import { BiddingComponent } from './bidding/bidding.component';
import { BidFormComponent } from './bid-form/bid-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StipeGatewayComponent } from './stripe-gateway/stripe-gateway.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BiddingComponent, BidFormComponent,StipeGatewayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoostingRoutingModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class BoostingModule { }
