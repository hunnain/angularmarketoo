import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/shared/interfaces/report';
import { CommonService } from 'src/app/shared/service/common.service';
import { DashboardService } from 'src/app/shared/service/dashboard/dashboard.service';
import { OrderService } from 'src/app/shared/service/order-service/order.service';
import * as chartData from '../../shared/data/chart';
import { doughnutData, pieData } from '../../shared/data/chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public doughnutData = doughnutData;
  public pieData = pieData;
  constructor(
    private dashboardService: DashboardService,
    private orderService: OrderService,
    private cs: CommonService
  ) {
    this.fetchReport();
    this.fetchOrders();
    Object.assign(this, { doughnutData, pieData })
  }

  // doughnut 2
  public view = chartData.view;
  public doughnutChartColorScheme = chartData.doughnutChartcolorScheme;
  public doughnutChartShowLabels = chartData.doughnutChartShowLabels;
  public doughnutChartGradient = chartData.doughnutChartGradient;
  public doughnutChartTooltip = chartData.doughnutChartTooltip;

  public chart5 = chartData.chart5;


  // lineChart
  public lineChartData = chartData.lineChartData;
  public lineChartLabels = chartData.lineChartLabels;
  public lineChartOptions = chartData.lineChartOptions;
  public lineChartColors = chartData.lineChartColors;
  public lineChartLegend = chartData.lineChartLegend;
  public lineChartType = chartData.lineChartType;

  // lineChart
  public smallLineChartData = chartData.smallLineChartData;
  public smallLineChartLabels = chartData.smallLineChartLabels;
  public smallLineChartOptions = chartData.smallLineChartOptions;
  public smallLineChartColors = chartData.smallLineChartColors;
  public smallLineChartLegend = chartData.smallLineChartLegend;
  public smallLineChartType = chartData.smallLineChartType;

  // lineChart
  public smallLine2ChartData = chartData.smallLine2ChartData;
  public smallLine2ChartLabels = chartData.smallLine2ChartLabels;
  public smallLine2ChartOptions = chartData.smallLine2ChartOptions;
  public smallLine2ChartColors = chartData.smallLine2ChartColors;
  public smallLine2ChartLegend = chartData.smallLine2ChartLegend;
  public smallLine2ChartType = chartData.smallLine2ChartType;

  // lineChart
  public smallLine3ChartData = chartData.smallLine3ChartData;
  public smallLine3ChartLabels = chartData.smallLine3ChartLabels;
  public smallLine3ChartOptions = chartData.smallLine3ChartOptions;
  public smallLine3ChartColors = chartData.smallLine3ChartColors;
  public smallLine3ChartLegend = chartData.smallLine3ChartLegend;
  public smallLine3ChartType = chartData.smallLine3ChartType;

  // lineChart
  public smallLine4ChartData = chartData.smallLine4ChartData;
  public smallLine4ChartLabels = chartData.smallLine4ChartLabels;
  public smallLine4ChartOptions = chartData.smallLine4ChartOptions;
  public smallLine4ChartColors = chartData.smallLine4ChartColors;
  public smallLine4ChartLegend = chartData.smallLine4ChartLegend;
  public smallLine4ChartType = chartData.smallLine4ChartType;

  public chart3 = chartData.chart3;



  // events
  public chartClicked(e: any): void {
  }
  public chartHovered(e: any): void {
  }

  ngOnInit() {
  }

  report: Report = {
    netProfit: 0,
    referrelDeduction: 0,
    storeCredit: 0,
    refund: 0,
    coupons: 0,
    transactionsManagementFee: 0,
    onlinePaymentFee: 0,
    totalReimbursment: 0,
    totalOrders: 0,
    totalDeliveredOrders: 0,
    totalCancelledOrders: 0,
    totalRefundedOrders: 0,
    shippingViaOwnAccount: 0,
    shippingViaMarketooAccount: 0,
    newFollowers: 0,
    lastMonthFollowers: 0,
    followersCompareDesc: '0% Increase',
    averageBasketValue: 0,
    averageBasketValueLastMonth: 0,
    averageBasketValueCompareDesc: '0% Increase',
    totalMessages: 0,
    revenue: 0,
    revenueLastMonth: 0,
    revenueCompareDesc: '0% Increase',
    totalActiveProducts: 0
  };
  fetchReport() {
    this.dashboardService.getReports().subscribe(res => {
      if (res && res['body']) {
        this.report = res['body'];
      }
    })
  }

  latestOrders: any[] = [];
  fetchOrders() {
    // this.loading = true;
    let query = `PageSize=${5}&PageNumber=${1}`;
    this.orderService.getOrders(query).subscribe(
      (res) => {
        if (res) {
          this.cs.isLoading.next(false);
          // this.loading = false;
          if (res.body) {
            this.latestOrders = res.body;
            // this.pagination = JSON.parse(res.headers.get('X-Pagination'));
          }
        }
      }
      //  ,err => {
      //   this.loading = false;
      //  }
    );
  }

  getNames(prods) {
    if (prods && prods.length) {
      return prods.map(item => item.name).join(',');
    } else {
      return 'N/A';
    }
  }

  public generating: boolean = false;
  downloadReport() {
    this.generating = true;
    let currentDate = new Date();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    this.dashboardService.generateReport(year, month).subscribe(res => {
      if (res && res['body']) {
        console.log(res['body'])
        this.generating = false;
        let content = res['body'].fileContents;
        let type = res['body'].contentType;
        let name = res['body'].fileDownloadName;
        this.downLoadFile(content, type, name);
      }
    })
  }

  /**
     * Method is use to download file.
     * @param data - Array Buffer data
     * @param type - type of the document.
     */
  downLoadFile(data: any, type: string, filename: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let downloadLink = document.createElement('a');
    downloadLink.href = url
    if (filename) {
      downloadLink.setAttribute('download', filename);
    }

    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
}
