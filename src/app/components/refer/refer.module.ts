import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferRoutingModule } from './refer-routing.module';
import { ReferComponent } from './refer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [ReferComponent],
  imports: [
    CommonModule,
    ReferRoutingModule,
    Ng2SmartTableModule
  ]
})
export class ReferModule { }
