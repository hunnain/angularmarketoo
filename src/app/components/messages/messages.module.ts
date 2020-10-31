import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MessagesRoutingModule } from './messages-routing.module';
import { ListMessageComponent } from './list-message/list-message.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListMessageComponent, ChatBoxComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    NgxDatatableModule,
    SharedModule
  ]
})
export class MessagesModule { }
