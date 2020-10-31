import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMessageComponent } from './list-message/list-message.component';

const routes: Routes = [
  {
    path: '',
    component: ListMessageComponent,
    data: {
      title: "All Messages",
      breadcrumb: "Messages"
    }      
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
