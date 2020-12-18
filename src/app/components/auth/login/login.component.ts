import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/service/auth-service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthServiceService
  ) {
    this.createLoginForm();
    this.createRegisterForm();
  }

  owlcarousel = [
    {
      title: 'Welcome to Marketoo',
      desc: 'Welcome content here',
    },
  ];
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true,
  };

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
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
    console.log(this.loginForm.value);

    this.authService.login(this.loginForm.value).subscribe(
      (res) => {
        console.log(res, 'response');
      },
      (error) => {
        console.log(error, 'error');
      }
    );
  }
}
