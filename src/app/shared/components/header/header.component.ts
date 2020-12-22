import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService } from '../../service/nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public right_sidebar: boolean = false;
  public open: boolean = false;
  public openNav: boolean = false;
  public isOpenMobile: boolean;

  @Output() rightSidebarEvent = new EventEmitter<boolean>();
  public isTranslate: boolean = false;
  constructor(
    public navServices: NavService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService
  ) {}

  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar;
    this.rightSidebarEvent.emit(this.right_sidebar);
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  changeLanguage() {
    this.isTranslate = !this.isTranslate;
    console.log(this.isTranslate, isPlatformBrowser(this.platformId));

    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(this.isTranslate ? 'zh-Hant' : 'en');
    }
  }

  ngOnInit() {}
}
