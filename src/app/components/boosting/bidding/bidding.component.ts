import { Component, OnInit } from '@angular/core';

import { Questions } from './ads-questions';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.scss']
})
export class BiddingComponent implements OnInit {
  public questions = Questions
  public tabId;
  constructor() {
  }

  ngOnInit() { }
  
  changeTab(tab){
    console.log("tab--",tab)
    // this.tabId = tab.panelId
    if(!this.tabId || this.tabId !== tab.panelId){
      this.tabId = tab.panelId
    }else {
      this.tabId = undefined;
    }
  }

}
