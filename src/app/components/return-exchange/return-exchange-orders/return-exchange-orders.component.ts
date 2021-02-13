import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import * as moment from 'moment';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { ReturnExchangeService } from 'src/app/shared/service/return-exchange-service/return-exchange.service';
import { returnDB } from '../../../shared/tables/return-list';

@Component({
  selector: 'app-return-exchange-orders',
  templateUrl: './return-exchange-orders.component.html',
  styleUrls: ['./return-exchange-orders.component.scss'],
})
export class ReturnExchanngeOrderComponent implements OnInit {
  public orders = [];
  public temp = [];
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
    private returnService: ReturnExchangeService,
    private cs: CommonService
  ) {
    // this.orders = returnDB.list_return;
    this.fetchReturnOrders();
  }

  ngOnInit() { }

  fetchReturnOrders() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.returnService.getReturnOrders(query).subscribe(
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
    );
  }

  onSelectRow(row) {
    let route = `/return-exchange/view-detail/${row}`;
    this.router.navigate([route]);
  }

  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchReturnOrders();
  }

  getProductsName(products) {
    if (products && products.length) {
      return products.map((prod) => prod.name).join(',');
    }
    return 'N/A';
  }
}
