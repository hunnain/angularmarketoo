import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public isTranslate: boolean = false;

  public sellerForm: FormGroup;
  public counter: number = 1;
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
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,) {
    this.sellerForm = this.fb.group({
      chinese_full_name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      english_full_name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      your_identity: ['', [Validators.required]],
      nick_name: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      gender: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      average_price_per_product: ['', [Validators.required]],
      country: ['', [Validators.required]],
      contact: ['', [Validators.required]],
      brand_name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      url: [''],
      product_category: [''],
      product_image: [''],
      brand_website: [''],
      facebook_url: [''],
      instagram_url: [''],
      place_of_product: [''],
      deliver_from: [''],
      sell_product_before: [''],
      hear_about: [''],
      weekend_market: [true],
      referee_url: [''],
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

}
