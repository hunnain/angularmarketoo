import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Paginate } from 'src/app/shared/interfaces/pagination';
import { CommonService } from 'src/app/shared/service/common.service';
import { NotificationService } from 'src/app/shared/service/notification/notification.service';
import { SignalrService } from 'src/app/shared/service/signalr.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public notifications = [];
  public loading: boolean = false;
  public pagination: Paginate = {
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 10,
    TotalCount: 0,
    TotalPages: 1,
  };
  pageSizeOptions: number[] = [5, 10, 25, 50];
  constructor(
    private notificationService: NotificationService,
    private cs: CommonService,
    private srService: SignalrService
  ) {
    this.fetchNotifications()
  }


  ngOnInit() {
  }

  fetchNotifications() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    let query = `PageSize=${PageSize}&PageNumber=${CurrentPage}`;
    this.notificationService.getNotifications(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          this.loading = false;
          if (res.body) {
            this.notifications = res.body;
            this.srService.resetNotifications();
            this.pagination = JSON.parse(res.headers.get('X-Pagination'));
          }
        }
      }
    );
  }


  formatType(type) {
    let formattedType = type.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
    return formattedType;
  }
  getValue(value) {
    console.log("value---", value)
    // let formattedType = type.match(/[A-Z][a-z]+|[0-9]+/g).join(" ")
    return 'formattedType';
  }

  formatTime(date) {
    return moment(date).fromNow();
  }


  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.fetchNotifications();
  }

}
