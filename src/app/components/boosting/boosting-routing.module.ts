import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiddingComponent } from './bidding/bidding.component';

const routes: Routes = [
  {
    path: '',
    component: BiddingComponent,
    data: {
      title: "Boosting",
      breadcrumb: "Bid"
    }      
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoostingRoutingModule { }
