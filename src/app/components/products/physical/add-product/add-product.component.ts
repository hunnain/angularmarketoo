import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
// var $;

// $('.select2-no-results').click(function () {
//   $('li.select2-no-results').trigger('click');
// });

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
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

  public mainCategories = MainCategories;
  public paymentOptions = PaymentOptions;
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

  constructor(private fb: FormBuilder, private elementRef: ElementRef) {
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
    });

    this.sizeOptions = SizeOptions;
    this.labelOptions = LabelOptions;

    this.labelConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
      language: {
        noResults: function () {
          return `<span id='no-results-btn' class='badge badge-secondary' onclick="myClick()" >Request Label</span>`;
        },
      },
      escapeMarkup: function (markup) {
        return markup;
      },
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

  ngAfterViewInit() {
    let elem = this.elementRef.nativeElement.querySelector('#no-results-btn');
    console.log(elem);
    if (elem)
      elem.addEventListener('onclick', this.noResultsButtonClicked.bind(this));
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
}
