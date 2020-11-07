import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BiddingComponent } from './bidding/bidding.component';
import { MyPerformanceComponent } from './my-performance/my-performance.component';

const routes: Routes = [
  {
    path: '',
    // component: BiddingComponent,
    // data: {
    //   title: "Boosting",
    //   breadcrumb: "Bid"
    // }
    children: [
      {
        path: '',
        component: BiddingComponent,
        data: {
          title: "Boosting",
          breadcrumb: "Bid"
        }
      },
      {
        path: 'my-ads-performance',
        component: MyPerformanceComponent,
        data: {
          title: "My Ads Performance",
          breadcrumb: "My Ads Performance"
        }
      }
    ]      
  },
  // {
  //   path: '/my-performance',
  //   component: MyPerformanceComponent,
  //   data: {
  //     title: "My Performance",
  //     breadcrumb: "My Performance"
  //   }      
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoostingRoutingModule { }
