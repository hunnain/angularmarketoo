import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { OrderService } from 'src/app/shared/service/order-service/order.service';
import { orderDB } from "../../../shared/tables/order-list";
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public orders = [];
  public temp = [];

  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  public pagination: Paginate = {
    TotalCount: 0,
    PageSize: 10,
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    TotalPages: 0
  };
  public loading: boolean = false;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private cs: CommonService,
    public translate: TranslateService,
  ) {
    // this.orders = orderDB.list_order;
  }

  fetchOrders() {
    this.loading = true;
    let query = `PageSize=10&PageNumber=1`;
    this.orderService.getOrders(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.orders = res.body;
          console.log('orders-res', res.headers.get('x-pagination'));
          this.pagination = JSON.parse(res.headers.get('X-Pagination'));
          console.log("pagination", this.pagination)
        }
      }
      //  ,err => {
      //   this.loading = false;
      //  }
    );
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.orders = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  ngOnInit() {
    this.fetchOrders();
  }

  onSelectRow(row) {
    let route = `/sales/order-detail/${row.replace(/#/g, "")}`
    this.router.navigate([route])
  }

  setPage(page) {
    console.log("page--", page)
  }

}
