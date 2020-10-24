import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { orderDB } from "../../../shared/tables/order-list";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public order = [];
  public temp = [];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;
  constructor(private router: Router) {
    this.order = orderDB.list_order;
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.order = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit() {
  }

  onSelectRow(row){
    console.log("row clicked",`/sales/order-detail/${row}`)
    let route = `/sales/order-detail/${row.replace(/#/g,"")}`
    this.router.navigate([route])
  }

}
