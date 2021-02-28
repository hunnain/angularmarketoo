import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DropzoneModule, DROPZONE_CONFIG, DropzoneConfigInterface } from 'ngx-dropzone-wrapper';


import { MessagesRoutingModule } from './messages-routing.module';
import { ListMessageComponent } from './list-message/list-message.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { SharedModule } from 'src/app/shared/shared.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  maxFilesize: 50,
  url: 'https://httpbin.org/post',
};

@NgModule({
  declarations: [ListMessageComponent, ChatBoxComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    NgxDatatableModule,
    SharedModule,
    DropzoneModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class MessagesModule { }
