import { Component, Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
// import { LoadingBarService } from '@ngx-loading-bar/core';
import { map, delay, withLatestFrom } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { SignalrService } from './shared/service/signalr.service';
import { PushNotificationService } from './shared/service/pushNotification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'seller-backend';
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    // private loader: LoadingBarService,
    translate: TranslateService,
    private srService: SignalrService,
    private pnService: PushNotificationService,
  ) {
    if (isPlatformBrowser(this.platformId)) {
      translate.setDefaultLang('en');
      translate.addLangs(['en', 'zh-Hant']);
      translate.use('en');
    }
  }

  ngOnInit() {
    this.createConnection();
    this.pnService.init();
  }

  ngOnDestory() {
    this.srService.disconnection('NotificationsHub')
  }

  createConnection() {
    this.srService.connectNotificationHub();
  }
}
