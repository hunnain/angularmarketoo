import { Component, OnInit } from '@angular/core';

import { Questions } from './ads-questions';
import { EnglishQuestions } from './ads-questionsenglish';
import { ChineseQuestions } from './ads-questionschinese';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.scss']
})
export class BiddingComponent implements OnInit {
  public questions;
  public tabId;
  public selectedLang: string = 'en'
  constructor(private translate: TranslateService) {
    this.selectedLang = this.translate.currentLang;
    this.questions = this.selectedLang === 'en' ? EnglishQuestions : ChineseQuestions
    this.translate.onLangChange.subscribe(res => {
      this.selectedLang = res.lang;
      this.questions = this.selectedLang === 'en' ? EnglishQuestions : ChineseQuestions
    })
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
