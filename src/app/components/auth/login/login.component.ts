import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AuthServiceService } from 'src/app/shared/service/auth-service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public isTranslate: boolean = false;

  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public loading: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService,
    private translate: TranslateService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  owlcarousel = [
    {
      title: 'title',
      desc: 'title',
    },
  ];
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true,
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      userName: [''],
      password: [''],
      confirmPassword: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.loading = true;
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        this.loading = false;
        console.log(res, 'success');
        localStorage.setItem('userInfo', JSON.stringify(res));
        localStorage.setItem('accessToken', res['accessToken']);
        localStorage.setItem('refreshToken', res['refreshToken']);
        this.router.navigate(['/dashboard/default']);
      },
      (error) => {
        this.loading = false;
        console.log(error);
      }
    );
    // this.router.navigate(['/dashboard/default'])

    // this.authService.login(this.loginForm.value).subscribe(
    //   (res) => {
    //     console.log(res, 'response');
    //   },
    //   (error) => {
    //     console.log(error, 'error');
    //   }
    // );
  }

  changeLanguage() {
    this.isTranslate = !this.isTranslate;
    console.log(this.isTranslate, isPlatformBrowser(this.platformId));

    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(this.isTranslate ? 'zh-Hant' : 'en');
    }
  }
}
