import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { returnDB } from "../../../shared/tables/return-list";
@Component({
  selector: 'app-return-exchange-orders',
  templateUrl: './return-exchange-orders.component.html',
  styleUrls: ['./return-exchange-orders.component.scss']
})
export class ReturnExchanngeOrderComponent implements OnInit {
  public order = [];
  public temp = [];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(private router: Router) {
    this.order = returnDB.list_return;
  }

  ngOnInit() {
  }

  onSelectRow(row){
    let route = `/return-exchange/view-detail/${row.replace(/#/g,"")}`
    this.router.navigate([route])
  }

}
