import { Component, OnInit } from '@angular/core';
import { productDB } from 'src/app/shared/tables/product-list';

import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { ProductService } from 'src/app/shared/service/product-service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public filterOptions: Array<Select2OptionData>;
  public filterConfig: Options;

  public product_list = [];
  public filters = '';

  constructor(private productService: ProductService) {
    this.product_list = productDB.product;

    this.filterConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
    };

    this.filterOptions = [
      { id: 'ac', text: 'All Categories' },
      { id: 'sc', text: 'Sub Categories' },
      { id: 'ec', text: 'Extended Categories' },
      { id: 'mdp', text: 'Marked Down Products' },
      { id: 'is', text: 'International Shipping' },
      { id: 'ls', text: 'Local Shipping' },
      { id: 'nu', text: 'Newest Uploads' },
      { id: 'l-to-h', text: 'Price Low to High' },
      { id: 'h-to-l', text: 'Price High to Low' },
    ];
  }

  pageNumber = 1;
  pageSize = 10;

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService
      .getProduct(`pageSize=${this.pageSize}&pageNumber=${this.pageNumber}`)
      .subscribe(
        (res) => {
          console.log('res', res);
          let templist = res.map((pro) => {
            return {
              img: pro.images.length
                ? 'data:image/jpeg;base64,' + pro.images[0]
                : '',
              product_title: pro.name,
              discount: pro.discountBuy,
              price: pro.price,
              sale: 'not on sale',
              tag: 'old',
            };
          });
          console.log(templist);

          this.product_list = JSON.parse(JSON.stringify(templist));

          //           {availableColours: []
          // availableSizes: ["XSmall", "S"]
          // brandUuid: null
          // category: "Clothing"
          // creationDate: "0001-01-01T05:00:00+05:00"
          // customDesignUu: {,…}
          // customSize: "XL"
          // customSizeImage: "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"
          // description: "New product description"
          // discountBuy: 21
          // discountGet: 42
          // extendedSubCategory: "small shirts"
          // images: [,…]
          // isApproved: false
          // isInternationalShipping: true
          // labels: ["pencils", "stationary"]
          // markdownPrice: 50
          // modificationDate: "2020-12-10T21:12:36.196692+05:00"
          // name: "Watch Name Updated"
          // price: 100.35
          // productUuid: "87093ed9-ab40-4fa8-800b-f85088751e43"
          // quantity: 1050
          // sellerUuid: "0c553263-e9d0-4499-828c-e7b569979fbf"
          // subCategory: "Shirts"}
        },
        (error) => {}
      );
  }
}
