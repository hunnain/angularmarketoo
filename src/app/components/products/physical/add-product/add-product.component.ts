import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';

import {
  MainCategories,
  PaymentOptions,
  ColorOptions,
  SubCategories,
  ExtendedCategories,
  LabelOptions,
  SizeOptions,
} from './data';
import { CommonService } from 'src/app/shared/service/common.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/service/product-service/product.service';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
// var $;

// $('.select2-no-results').click(function () {
//   $('li.select2-no-results').trigger('click');
// });
declare var $;

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  @ViewChild('keyWordModal') keyWordModal: ElementRef;
  public label: string;
  public totalAddedLabels = [''];
  public loading: boolean = false;
  public productForm: FormGroup;
  public counter: number = 1;
  public productWishImages: Array<string> = [];
  public sizeImg: string = 'assets/images/user.png';
  public url = [
    {
      img: 'assets/images/user.png',
    },
    {
      img: 'assets/images/user.png',
    },
    {
      img: 'assets/images/user.png',
    },
    {
      img: 'assets/images/user.png',
    },
  ];

  public labelOptions: Array<Select2OptionData>;
  public labelConfig: Options;
  public sizeOptions: Array<Select2OptionData>;
  public sizeConfig: Options;
  public paymentOptions: Array<Select2OptionData>;
  public paymentConfig: Options;
  public closeResult: string;
  public user = JSON.parse(localStorage.getItem('userInfo'));
  public mainCategories = MainCategories;
  public colorOptions: Array<Select2OptionData>;
  public colorConfig: Options;

  public subCategories = SubCategories;
  public extendedCategories = ExtendedCategories;

  get main_category() {
    return this.productForm.get('category');
  }

  get disc_buy() {
    return this.productForm.get('discountBuy');
  }

  get disc_get() {
    return this.productForm.get('discountGet');
  }

  get sub_category() {
    return this.productForm.get('sub_category');
  }

  get extended_category() {
    return this.productForm.get('extended_category');
  }

  get custom_size() {
    return this.productForm.get('customSize');
  }

  get custom_design() {
    return this.productForm.get('customDesign');
  }
  public selectedLang: string = 'en';
  product_id: string = '';
  isEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private modalService: NgbModal,
    private productService: ProductService,
    private translate: TranslateService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private cs: CommonService
  ) {
    let self = this;
    this.selectedLang = this.translate.currentLang;
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
    this.translate.onLangChange.subscribe((res) => {
      this.selectedLang = res.lang;
      this.sizeOptions = SizeOptions(this.selectedLang);
      this.labelConfig = this.generateLabelConfig();
      this.labelOptions = LabelOptions(this.selectedLang);
      this.colorOptions = ColorOptions(this.selectedLang);
    });

    this.productForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      price: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      markdownPrice: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      discountBuy: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      discountGet: ['', [Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],

      code: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      custom_color: ['', Validators.required],
      size: ['', Validators.required],
      category: ['', Validators.required],
      paymentOptions: ['', Validators.required],
      colorOption: ['', Validators.required],
      sub_category: ['', Validators.required],
      extended_category: ['', Validators.required],
      labels: [''],
      sizes: [''],
      customSize: [false],
      customizeSize: [''],
      customDesign: [false],
      isInternationalShipping: [true],
      customDesignFormat: [''],
      description: [''],
      customDescription: [''],
      customMaterial: [''],

      // localShip: [true],
    });

    this.sizeOptions = SizeOptions(this.selectedLang);
    this.labelOptions = LabelOptions(this.selectedLang);
    this.paymentOptions = PaymentOptions;
    this.colorOptions = ColorOptions(this.selectedLang);

    this.labelConfig = this.generateLabelConfig();
    // {
    //   multiple: true,
    //   theme: 'classic',
    //   closeOnSelect: false,
    //   width: '100%',
    //   language: {
    //     noResults: () => {
    //       $('body').ready(function () {
    //         $('#no-results-btn').click(function (e) {
    //           self.openModal();
    //         });
    //       });
    //       return `No Keyword found <span id='no-results-btn' class='badge badge-secondary'>Request Label</span>`;
    //     },
    //   },
    //   escapeMarkup: function (markup) {
    //     return markup;
    //   },
    // };

    this.paymentConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
      // templateResult: this.templateResult,
      // templateSelection: this.templateSelection
    };
    this.colorConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
      // templateResult: this.templateResult,
      // templateSelection: this.templateSelection
    };
    this.sizeConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
    };

    this.activeRoute.params.subscribe((params) => {
      console.log(params);
      if (params.id) {
        this.product_id = params.id;
        this.isEdit = true;
        this.loading = true;
        productService.getProductById(params.id).subscribe((res) => {
          // console.log(res.body);
          // Object.keys(res.body).forEach((key) => {
          const { body } = res;
          this.productForm.patchValue({
            ...res.body,
            sizes: body.availableSizes,
            sub_category: body.subCategory,
            customizeSize: body.customSize,
            customDesign: body.customDesignUu ? true : false,
            customDesignFormat: body.customDesignUu
              ? body.customDesignUu.customDesignFormat
              : '',
            customDescription: body.customDesignUu
              ? body.customDesignUu.description
              : '',
            colorOption: body.availableColours,
            custom_color: body.customColours[0] || '',
            extended_category: body.extendedSubCategory,
          });
          this.counter = body.quantity;
          this.customSizeImage = this.addBase64(body.customSizeImage);
          this.customDesignImage = body.customDesignUu
            ? this.addBase64(body.customDesignUu.image)
            : '';
          if (body.images && body.images.length)
            body.images.forEach((img, i) => {
              if (img) {
                this.url[i].img = this.addBase64(img);
                this.imgs[i] = img;
              }
            });

          console.log(this.productForm.value);

          // });
          this.cs.isLoading.next(false);
          this.loading = false;
          console.log(res);
        });
      }
    });
    // this.productForm.valueChanges.subscribe(res => {
    //   console.log("res---",res)
    // })
  }

  generateLabelConfig(): Options {
    console.log(this.selectedLang, 'label');
    let self = this;
    return {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
      language: {
        noResults: () => {
          $('body').ready(function () {
            $('#no-results-btn').click(function (e) {
              self.openModal();
            });
          });
          return `${
            this.selectedLang == 'en' ? 'No Keyword found' : '沒有相關鍵字'
          } <span id='no-results-btn' class='badge badge-secondary'>${
            this.selectedLang == 'en' ? 'Request Label' : '申請關鍵字'
          }</span>`;
        },
      },
      escapeMarkup: function (markup) {
        return markup;
      },
    };
  }

  noResultsButtonClicked() {
    console.log('You clicked the "No Result Found" button.');
  }

  increment() {
    this.counter += 1;
  }

  decrement() {
    if (this.counter > 0) {
      this.counter -= 1;
    }
  }

  openModal() {
    console.log('Date');
    this.open(this.keyWordModal);
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onAddLabel() {
    console.log('added', this.label);
    if (this.label) this.totalAddedLabels.push(this.label);
    this.label = '';
    this.modalService.dismissAll('close');
  }

  imgs = [];
  //FileUpload
  readUrl(event: any, i) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      let img = reader.result.toString();
      let base = reader.result.toString();
      console.log(base);

      this.url[i].img = base;
      this.productWishImages[i] = base;
      let splited = img.split('base64,');
      let byteImg = splited[1];
      console.log(splited);
      this.imgs[i] = byteImg;
    };
  }

  removeBase64(data) {
    let base = data;
    let splited = base.split('base64,');
    let byteImg = splited[1];
    return byteImg;
  }

  addBase64(data) {
    let base = `data:image/jpeg;base64,${data}`;
    return base;
  }

  //FileUpload
  customSizeImage = '';
  customDesignImage = '';
  readCustomSizeImg(event: any) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      let base = reader.result.toString();
      // let splited = base.split('base64,');
      // let byteImg = splited[1];
      // this.customSizeImage = byteImg;
      this.customSizeImage = base;
    };
  }

  readCustomDesignImg(event: any) {
    if (event.target.files.length === 0) return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      let base = reader.result.toString();
      // let splited = base.split('base64,');
      // let byteImg = splited[1];
      // this.customDesignImage = byteImg;
      this.customDesignImage = base;
    };
  }

  ngOnInit() {}

  myClick() {
    // changes.prop contains the old and the new value...
    console.log('Sda');
  }

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    autoProcessQueue: false,
    autoQueue: false,
    addRemoveLinks: true,
  };
  public onDiscard() {
    this.router.navigate(['/products/physical/product-list']);
  }

  public onUploadInit(args: any): void {}

  public onUploadError(args: any): void {}

  public onUploadSuccess(args: any): void {}

  public onSubmit() {
    let temp = this.productForm.value;
    let data = {
      ...temp,
      subCategory: temp.sub_category,
      quantity: this.counter,
      images: this.imgs,
      availableSizes: temp.sizes,
      description: temp.description,
      sellerUuid: this.user.sellerUuid,
      paymentOptions: temp.paymentOptions,
      availableColours: temp.colorOption,
      customColours: [temp.custom_color],
      extendedSubCategory: temp.extended_category,
    };
    console.log(temp);

    if (temp.customDesign) {
      data['customDesignUu'] = {
        image: this.removeBase64(this.customDesignImage),
        description: temp.customDescription,
        customDesignFormat: temp.customDesignFormat,
      };
    } else {
      delete data['customDesignFormat'];
      delete data['customDescription'];
      delete data['customDesign'];
    }

    if (temp.customSize) {
      data['customSizeImage'] = this.removeBase64(this.customSizeImage);
      data['customSize'] = temp.customizeSize;
    } else {
      delete data['customizeSize'];
      delete data['customSize'];
    }

    console.log(data);
    this.loading = true;
    if (this.product_id) {
      this.productService
        .updateProduct(this.product_id, data)
        .subscribe((res) => {
          this.cs.isLoading.next(false);
          this.loading = false;
          this.router.navigate(['/products/physical/product-list']);
        });
    } else {
      this.productService.addProduct(data).subscribe((res) => {
        this.cs.isLoading.next(false);
        this.loading = false;
        this.router.navigate(['/products/physical/product-list']);
      });
    }
  }
}
