import { Component, OnInit } from '@angular/core';
import { productDB } from 'src/app/shared/tables/product-list';

import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  
  public filterOptions: Array<Select2OptionData>;
  public filterConfig: Options;
  
  public product_list = []
  public filters = ''

  constructor() {
    this.product_list = productDB.product;

    this.filterConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
    };

    this.filterOptions = [
      {id:'ac',text:"All Categories"},
      {id:'sc',text:"Sub Categories"},
      {id:'ec',text:"Extended Categories"},
      {id:'mdp',text:"Marked Down Products"},
      {id:'is',text:"International Shipping"},
      {id:'ls',text:"Local Shipping"},
      {id:'nu',text:"Newest Uploads"},
    ]

  }

  ngOnInit() {}


}
