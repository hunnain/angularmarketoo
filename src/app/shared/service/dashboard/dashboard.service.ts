import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private commonService: CommonService) { }

  getReports() {
    return this.commonService.get(`seller/get-monthly-report`);
  }

  generateReport(year, month) {
    return this.commonService.get(`seller/generate-report/${year}-${month}`);
  }

}
