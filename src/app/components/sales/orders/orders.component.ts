import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { OrderService } from 'src/app/shared/service/order-service/order.service';
import { orderDB } from '../../../shared/tables/order-list';
import 'rxjs/add/operator/debounceTime';
import { FormControl } from '@angular/forms';
import { generateUrl } from 'src/app/shared/utilities';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  public orders = [];
  public temp = [];
  selectedFilter = [];
  searchTerm = new FormControl();
  formCtrlSub;
  @ViewChild(DatatableComponent, { static: false }) table: DatatableComponent;

  public pagination: Paginate = {
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 10,
    TotalCount: 0,
    TotalPages: 1,
  };
  pageSizeOptions: number[] = [5, 10, 25, 50];
  public loading: boolean = false;

  constructor(
    private router: Router,
    private orderService: OrderService,
    private cs: CommonService,
    public translate: TranslateService
  ) {
    // this.orders = orderDB.list_order;
  }

  getKey(key) {
    let tempKey = key.match(/[A-Z][a-z]+/g).split('_')[2];
    console.log(tempKey);
    return tempKey;
  }

  generateUrlLocal(query) {
    let filters = {};
    this.selectedFilter.forEach((key) => {
      filters[this.getKey(key)] = this.searchTerm;
    });

    let que = query;
    if (query) que = query + '&' + generateUrl(filters);

    return que;
  }

  fetchOrders() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    // query = this.generateUrlLocal(query);
    this.orderService.getOrders(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          if (res.body) {
            this.orders = res.body;
            this.pagination = JSON.parse(res.headers.get('X-Pagination'));
          }
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
    this.formCtrlSub = this.searchTerm.valueChanges
      .debounceTime(2000)
      .subscribe((newValue) => {
        this.fetchOrders();
      });
    this.fetchOrders();
  }

  onSelectRow(row) {
    let route = `/sales/order-detail/${row}`;
    this.router.navigate([route]);
  }

  setPage(page) {
    console.log('page--', page);
  }

  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchOrders();
  }

  getProductsName(products) {
    if (products && products.length) {
      return products.map((prod) => prod.name).join(',');
    }
    return 'N/A';
  }
}
