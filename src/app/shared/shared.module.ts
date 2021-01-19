import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
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
import { MaterialModule } from '../material.module';
import { EmailChipInputComponent } from './components/email-chip-input/email-chip-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { CropperComponent } from './components/cropper/cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';

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
    EmailChipInputComponent,
    ButtonComponent,
    CropperComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgSelect2Module,
    MatPaginatorModule,
    NgbModule,
    TranslateModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule

  ],
  providers: [NavService, WINDOW_PROVIDERS],
  exports: [
    NgSelect2Module,
    FeatherIconsComponent,
    NgbModule,
    ToggleFullscreenDirective,
    RightSidebarComponent,
    TranslateModule,
    MatPaginatorModule,
    LoaderComponent,
    EmailChipInputComponent,
    ButtonComponent,
    CropperComponent,
    ImageCropperModule
  ],
})
export class SharedModule { }
