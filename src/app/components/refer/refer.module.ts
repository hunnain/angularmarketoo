import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferRoutingModule } from './refer-routing.module';
// import { ReferComponent } from './refer.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ReferRoutingModule,
    Ng2SmartTableModule,
    SharedModule,
  ],
})
export class ReferModule {}
