import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AuthServiceService } from 'src/app/shared/service/auth-service/auth-service.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public isTranslate: boolean = false;

  public sellerForm: FormGroup;
  public brandForm: FormGroup;
  public counter: number = 1;
  public loading: boolean = false;
  public productWishImages: Array<Object> | [] = []
  public url = [{
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  },
  {
    img: "assets/images/user.png",
  }
  ]


  constructor(private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,

    ) {
    this.sellerForm = this.fb.group({
      chineseFname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      englishFname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}')]],
      password: ['', [Validators.required]],
      sellerIdentity: ['', [Validators.required]],
      nick_name: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      gender: ['',[Validators.required]],
      country: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      hdySellBefore: [''],
      hdyHearAbtMarketoo: [''],
      interestedToJoinWm: [true],
      refereeUrl: [''],
    })
    this.brandForm = this.fb.group({
      brandName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      designHallUrl: [''],
      brandUrl: [''],
      productCategory: [''],
      facebookUrl: [''],
      instaUrl: [''],
      avgPricePerProduct: ['', [Validators.required]],
      placeOfProduct: [''],
      deliverFrom: [''],
    })
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  //FileUpload
  readUrl(event: any, i) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url[i].img = reader.result.toString();
    }
  }

  ngOnInit() {
  }

  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    url:null,
    autoProcessQueue:false,
    autoQueue:false,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  public onUploadInit(args: any): void { }

  public onUploadError(args: any): void { }

  public onUploadSuccess(args: any): void { }

  changeLanguage() {
    this.isTranslate = !this.isTranslate;
    console.log(this.isTranslate, isPlatformBrowser(this.platformId));

    if (isPlatformBrowser(this.platformId)) {
      this.translate.use(this.isTranslate ? 'zh-Hant' : 'en');
    }
  }

  createSeller(){
    console.log('seller info',this.sellerForm.value)
    console.log('brand info',this.brandForm.value)
    console.log('images',this.url)
    let data = {
      ...this.sellerForm.value,
      brandUu:{...this.brandForm.value}
    }
    this.loading = true;
    this.authService.signUp(data).subscribe(
      (res) => {
        console.log(res, 'response');
        this.loading = false;
        this.router.navigate(['/login'])
      },
      (error) => {
        console.log(error, 'error');
        this.loading = false;
      }
    );


  }

}
