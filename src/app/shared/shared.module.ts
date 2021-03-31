import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';

// modules
import { MaterialModule } from '../material.module';

// directives
import { ToggleFullscreenDirective } from './directives/fullscreen.directive';

// services
import { NavService } from './service/nav.service';
import { WINDOW_PROVIDERS } from './service/windows.service';

// components
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatherIconsComponent } from './components/feather-icons/feather-icons.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { RightSidebarComponent } from './components/right-sidebar/right-sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { EmailChipInputComponent } from './components/email-chip-input/email-chip-input.component';
import { ButtonComponent } from './components/button/button.component';
import { CropperComponent } from './components/cropper/cropper.component';
import { RatingComponent } from './components/rating/rating.component';
import { DiscountPipe } from './pipes/discount.pipe';


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
    CropperComponent,
    RatingComponent,
    DiscountPipe
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
    ImageCropperModule,
  ],
  providers: [
    NavService,
    WINDOW_PROVIDERS,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
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
    RatingComponent,
    ImageCropperModule,
    DiscountPipe
  ],
})
export class SharedModule { }
