import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Select2OptionData } from 'ng-select2';
import { Options, LabelType } from 'ng5-slider';
import { LabelOptions } from '../../products/physical/add-product/data';
import { Options as Opt } from 'select2';
@Component({
  selector: 'app-bid-form',
  templateUrl: './bid-form.component.html',
  styleUrls: ['./bid-form.component.scss'],
})
export class BidFormComponent implements OnInit {
  public productOptions: Array<Select2OptionData>;
  public productConfig;
  public products = [];
  public keyWords: Array<Select2OptionData>;

  // public keyWords = LabelOptions;
  public selectedKeyWords = [''];

  public closeResult: string;
  public bid: number;
  public labelConfig: Opt;
  // slide range input1
  value1: number = 40;
  options1: Options = {
    floor: 1,
    ceil: 100,
  };
  // slide range input2
  value2: number = 40;
  options2: Options = {
    floor: 1,
    ceil: 100,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>$</b>' + value;
        case LabelType.High:
          return '<b>$</b>' + value;
        default:
          return `$ ${value} HKD`;
      }
    },
  };
  // slide range input3
  value3: number = 7;
  options3: Options = {
    floor: 3,
    ceil: 30,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min days:</b>' + value;
        case LabelType.High:
          return '<b>Max days:</b>' + value;
        default:
          return value + 'days';
      }
    },
  };
  constructor(private modalService: NgbModal) {
    this.productConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
      // templateResult: this.templateResult,
      // templateSelection: this.templateSelection
    };
    this.keyWords = LabelOptions;
    this.labelConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
      language: {
        noResults: function () {
          return `No label found <span id='no-results-btn' class='badge badge-secondary'>Request Label</span>`;
        },
      },
      escapeMarkup: function (markup) {
        return markup;
      },
    };
    this.productOptions = [
      {
        id: '1',
        text: 'Product 1',
        additional: {
          img: 'assets/images/digital-product/logo.jpg',
        },
      },
      {
        id: '2',
        text: 'Product 2',
        additional: {
          img: 'assets/images/digital-product/logo.jpg',
        },
      },
      {
        id: '3',
        text: 'Product 3',
        additional: {
          img: 'assets/images/digital-product/logo.jpg',
        },
      },
      {
        id: '4',
        text: 'Product 4',
        additional: {
          img: 'assets/images/digital-product/logo.jpg',
        },
      },
      {
        id: '5',
        text: 'Product 5',
        additional: {
          img: 'assets/images/digital-product/logo.jpg',
        },
      },
      {
        id: '6',
        text: 'Product 6',
        additional: {
          img: 'assets/images/digital-product/logo.jpg',
        },
      },
    ];
  }

  ngOnInit() {}

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

  openPaymentModal(content) {
    this.open(content);
  }

  selectKeyWord(event, key) {
    console.log('checked', key);
    let value = event.target.checked;
    if (value) {
      if (
        !this.selectedKeyWords.length ||
        !this.selectedKeyWords.includes(key)
      ) {
        this.selectedKeyWords.push(key);
      }
    } else {
      if (this.selectedKeyWords.includes(key)) {
        let index = this.selectedKeyWords.indexOf(key);
        this.selectedKeyWords.splice(index, 1);
      }
    }
    console.log('checked', this.selectedKeyWords);
  }

  addProduct(event) {
    console.log(event);
    let filteredProd = this.productOptions.filter((prod) =>
      event.includes(prod.id)
    );
    this.products = filteredProd;
  }

  //  // function for result template
  //  public templateResult = (state: Select2OptionData): any | string => {
  //   if (!state.id) {
  //     return state.text;
  //   }

  //   let image = '<span class="image"></span>';

  //   if (state.additional.img) {
  //     image = '<span class="image"><img src="' + state.additional.img + '"</span>';
  //   }

  //   return jQuery('<span>' + image + ' ' + state.text + '</span>');
  // }

  // // function for selection template
  // public templateSelection = (state: Select2OptionData): any | string => {
  //   if (!state.id) {
  //     return state.text;
  //   }

  //   // let image = '<span class="image"></span>';

  //   // if (state.additional.img) {
  //   //   image = '<span class="image"><img src="' + state.additional.img + '"</span>';
  //   // }

  //   return jQuery('<span>' + state.text + '</span>');
  // }
}
