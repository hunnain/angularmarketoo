import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TranslateModule } from '@ngx-translate/core';
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { NavService } from './service/nav.service';
import { WINDOW_PROVIDERS } from './service/windows.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
@NgModule({
  declarations: [
    ToggleFullscreenDirective,
    FeatherIconsComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    ContentLayoutComponent,
    BreadcrumbComponent,
    RightSidebarComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelect2Module,
    // MatPaginatorModule,
    NgbModule,
    TranslateModule,
  ],
  providers: [NavService, WINDOW_PROVIDERS],
  exports: [
    NgSelect2Module,
    FeatherIconsComponent,
    NgbModule,
    ToggleFullscreenDirective,
    RightSidebarComponent,
    TranslateModule,
    // MatPaginatorModule,
    LoaderComponent,
  ],
})
export class SharedModule {}
