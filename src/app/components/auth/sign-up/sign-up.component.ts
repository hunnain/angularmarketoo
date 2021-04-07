import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { AuthServiceService } from 'src/app/shared/service/auth-service/auth-service.service';
import { CommonService } from 'src/app/shared/service/common.service';
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
  public agree: boolean = false;
  public productWishImages: Array<string> = []
  public url = [{
    img: "assets/images/attach.png",
  },
  {
    img: "assets/images/attach.png",
  },
  {
    img: "assets/images/attach.png",
  },
  {
    img: "assets/images/attach.png",
  },
  {
    img: "assets/images/attach.png",
  }
  ]


  public hearAboutOptions = {
    1: "Marketoo Designers’ Refer （please specify Designer’s URL)",
    2: "Invited by Marketoo",
    3: "Google",
    4: "Newspapers/ Magazines",
    5: "Facebook/Instagram",
    6: "Introduced by family/ friends",
    7: "Other"
  }

  public sellProductBeforeOpts = {
    1: "Store",
    2: "Market",
    3: "Consignment Shop",
    4: "Shopping sites (such as Etsy, Pinkoi, Caurosell) Shopping sites",
    5: "Facebook/Instagram",
    6: "None",
    7: "Other"
  }

  public yourIdentityOpts = {
    1: "Full Time Designer / Handicraftsman",
    2: "Freelancing Designer /Handicraftsman",
    3: "Design Corporation",
    4: "Authorised Distributor",
    5: "Other"
  }

  public productCategoryOpts = {
    1: "Original Design",
    2: "Authorised Sales",
    3: "Workshop",
    4: "Other"
  }

  public averageProductPriceOpts = {
    1: "&#60;HK$100",
    2: "HK$100-300",
    3: "HK$300-500",
    4: "HK$500-1000",
    5: "&#62;HK$1000"
  }

  public getObjectKeys = Object.keys;
  constructor(private fb: FormBuilder,
    private authService: AuthServiceService,
    private router: Router,
    private translate: TranslateService,
    private cs: CommonService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.cs.isLoading.subscribe(loading => {
      this.loading = loading;
    })
    this.sellerForm = this.fb.group({
      chineseFname: ['', [Validators.required]],
      englishFname: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}')]],
      password: ['', [Validators.required]],
      sellerIdentity: ['', [Validators.required]],
      nick_name: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      contactNo: ['', [Validators.required]],
      hdySellBefore: [''],
      hdyHearAbtMarketoo: [''],
      interestedToJoinWm: [true],
      refereeUrl: [''],
    })
    this.brandForm = this.fb.group({
      brandName: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      designHallUrl: ['', [Validators.required]],
      brandUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      productCategory: ['', [Validators.required]],
      facebookUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      instaUrl: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      avgPricePerProduct: ['', [Validators.required]],
      placeOfProduct: ['', [Validators.required]],
      deliverFrom: ['', [Validators.required]],
    })
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    this.counter -= 1;
  }

  //FileUpload
  imgs = [];
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
      // this.url[i].img = reader.result.toString();
      let img = reader.result.toString();
      this.productWishImages[i] = reader.result.toString();
      let splited = img.split('base64,');
      let byteImg = splited[1];
      console.log(splited)
      this.imgs[i] = byteImg;
    }
  }

  ngOnInit() {
  }

  public config1: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    url: null,
    autoProcessQueue: false,
    autoQueue: false,
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

  createSeller() {
    // console.log('seller info',this.sellerForm.value)
    // console.log('brand info',this.brandForm.value)
    // console.log('byteImages',this.imgs)

    let data = {
      ...this.sellerForm.value,
      brandUu: { ...this.brandForm.value, productWishImages: this.imgs },
      isAgree: this.agree

    }
    console.log("data", data)
    // this.loading = true;
    // this.authService.signUp(data).subscribe(
    //   (res) => {
    //     if (res) {
    //       // console.log(res, 'response');
    //       this.cs.isLoading.next(false)
    //       this.loading = false;
    //       this.router.navigate(['/login'])
    //     }
    //   }
    // );
  }


}
