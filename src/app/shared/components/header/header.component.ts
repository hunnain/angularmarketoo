import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from '../../service/auth-service/auth-service.service';
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

  public profileImage: string;
  constructor(
    public navServices: NavService,
    private authService: AuthServiceService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private translate: TranslateService,
    private router: Router
  ) {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo.image) {
      this.profileImage = this.addBase64(userInfo.image);
    }
  }

  addBase64(data) {
    let base = `data:image/jpeg;base64,${data}`;
    return base;
  }

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

    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(this.isTranslate ? 'zh-Hant' : 'en');
    }
  }

  onLogout() {
    this.authService.logout().subscribe((res) => {
      this.router.navigate(['/auth/login']);
    });
  }

  ngOnInit() { }
}
