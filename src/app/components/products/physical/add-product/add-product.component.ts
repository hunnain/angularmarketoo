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

  public mainCategories = MainCategories;
  public colorOptions = ColorOptions;

  public subCategories = SubCategories;
  public extendedCategories = ExtendedCategories;

  get main_category() {
    return this.productForm.get('category');
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

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private modalService: NgbModal,
    private productService: ProductService
  ) {
    let self = this;

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
      paymentOption: ['', Validators.required],
      colorOption: ['', Validators.required],
      sub_category: ['', Validators.required],
      extended_category: ['', Validators.required],
      labels: [''],
      sizes: [''],
      customSize: [false],
      customDesign: [false],
      isInternationalShipping: [true],
      customDesignFormat: [''],
      description: [''],
      // localShip: [true],
    });

    this.sizeOptions = SizeOptions;
    this.labelOptions = LabelOptions;
    this.paymentOptions = PaymentOptions;

    this.labelConfig = {
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
          return `No Keyword found <span id='no-results-btn' class='badge badge-secondary'>Request Label</span>`;
        },
      },
      escapeMarkup: function (markup) {
        return markup;
      },
    };

    this.paymentConfig = {
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

    // this.productForm.valueChanges.subscribe(res => {
    //   console.log("res---",res)
    // })
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
      this.url[i].img = reader.result.toString();
    };
  }

  //FileUpload
  readUrlSizeImg(event: any) {
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
      this.sizeImg = reader.result.toString();
    };
  }

  ngOnInit() {}

  getColor(color) {
    console.log(color);
  }

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

  public onUploadInit(args: any): void {}

  public onUploadError(args: any): void {}

  public onUploadSuccess(args: any): void {}

  public onSubmit() {
    let temp = this.productForm.value;
    let data = {
      ...temp,
      subCategory: temp.sub_category,
      quantity: this.counter,

      // images: this.url,
    };
    console.log(data);
    this.loading = true;
    this.productService.addProduct(data).subscribe(
      (res) => {
        console.log(res, 'success');
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
