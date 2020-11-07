import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng5SliderModule } from 'ng5-slider';

import { BoostingRoutingModule } from './boosting-routing.module';
import { BiddingComponent } from './bidding/bidding.component';
import { BidFormComponent } from './bid-form/bid-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StipeGatewayComponent } from './stripe-gateway/stripe-gateway.component';
import { MyPerformanceComponent } from './my-performance/my-performance.component';
// import { ChartsModule } from 'ng2-charts';
// import { Ng2GoogleChartsModule } from 'ng2-google-charts';
// import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartistModule } from 'ng-chartist';

@NgModule({
  declarations: [BiddingComponent,MyPerformanceComponent, BidFormComponent,StipeGatewayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    BoostingRoutingModule,
    NgxDatatableModule,
    SharedModule,
    // ChartsModule,
    // Ng2GoogleChartsModule,
    // NgxChartsModule,
    ChartistModule
  ]
})
export class BoostingModule { }
