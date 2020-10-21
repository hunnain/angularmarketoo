import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferComponent } from './refer.component';


const routes: Routes = [
  {
    path: '',
    component: ReferComponent,
    data: {
      title: "Refer",
      breadcrumb: "Refer"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferRoutingModule { }
