import { Component, OnInit } from '@angular/core';
import { productDB } from 'src/app/shared/tables/product-list';

import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { ProductService } from 'src/app/shared/service/product-service/product.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/service/common.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public filterOptions: Array<Select2OptionData>;
  public filterConfig: Options;
  public loading: boolean = false;
  public product_list = [];
  public filters = '';
  pagination = {
    CurrentPage: 1,
    HasNext: false,
    HasPrevious: false,
    PageSize: 10,
    TotalCount: 0,
    TotalPages: 1,
  };
  // MatPaginator Inputs
  // length = 100;
  // pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  public selectedLang: string = 'en';
  constructor(
    private productService: ProductService,
    private translate: TranslateService,
    private router: Router,
    private cs: CommonService
  ) {
    this.product_list = [];
    this.cs.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
    this.selectedLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((res) => {
      this.selectedLang = res.lang;
      this.setFilters(res.lang);
    });

    this.filterConfig = {
      multiple: true,
      theme: 'classic',
      closeOnSelect: false,
      width: '100%',
    };

    this.filterOptions = [
      {
        id: 'ac',
        text: this.selectedLang === 'en' ? 'All Categories' : '所有類別',
      },
      {
        id: 'sc',
        text: this.selectedLang === 'en' ? 'Sub Categories' : '次煩別',
      },
      {
        id: 'ec',
        text: this.selectedLang === 'en' ? 'Extended Categories' : '次組別',
      },
      {
        id: 'mdp',
        text: this.selectedLang === 'en' ? 'Marked Down Products' : '減價貨品',
      },
      {
        id: 'is',
        text:
          this.selectedLang === 'en' ? 'International Shipping' : '國際郵寄',
      },
      {
        id: 'ls',
        text: this.selectedLang === 'en' ? 'Local Shipping' : '本地郵寄',
      },
      {
        id: 'nu',
        text: this.selectedLang === 'en' ? 'Newest Uploads' : '最新上架',
      },
      {
        id: 'l-to-h',
        text: this.selectedLang === 'en' ? 'Price Low to High' : '價格由低至高',
      },
      {
        id: 'h-to-l',
        text: this.selectedLang === 'en' ? 'Price High to Low' : '價格由高至低',
      },
    ];
  }

  ngOnInit() {
    this.getProducts();
  }

  pageEvent(data) {
    console.log(data);
    this.pagination.PageSize = data.pageSize;
    this.pagination.CurrentPage = data.pageIndex + 1;
    this.getProducts();
  }

  setFilters(lang) {
    this.filterOptions = [
      { id: 'ac', text: lang === 'en' ? 'All Categories' : '所有類別' },
      { id: 'sc', text: lang === 'en' ? 'Sub Categories' : '次煩別' },
      { id: 'ec', text: lang === 'en' ? 'Extended Categories' : '次組別' },
      { id: 'mdp', text: lang === 'en' ? 'Marked Down Products' : '減價貨品' },
      { id: 'is', text: lang === 'en' ? 'International Shipping' : '國際郵寄' },
      { id: 'ls', text: lang === 'en' ? 'Local Shipping' : '本地郵寄' },
      { id: 'nu', text: lang === 'en' ? 'Newest Uploads' : '最新上架' },
      {
        id: 'l-to-h',
        text: lang === 'en' ? 'Price Low to High' : '價格由低至高',
      },
      {
        id: 'h-to-l',
        text: lang === 'en' ? 'Price High to Low' : '價格由高至低',
      },
    ];
  }

  onEdit(data) {
    console.log(data);
    this.router.navigate(['/products/physical/edit-product', data.uuid]);
  }

  getProducts() {
    const { PageSize, CurrentPage } = this.pagination;
    this.loading = true;
    this.product_list = [];
    this.productService
      .getProduct(`pageSize=${PageSize}&pageNumber=${CurrentPage}`)
      .subscribe((res) => {
        let paginate = JSON.parse(res.headers.get('X-Pagination'));
        console.log('res', res, paginate);
        let data = res.body;
        if (data) {
          let templist = data.map((pro) => {
            return {
              uuid: pro.productUuid,
              img: pro.image ? 'data:image/jpeg;base64,' + pro.image : '',
              product_title: pro.name,
              discount: pro.discountBuy,
              price: pro.price,
              sale: 'not on sale',
              tag: 'old',
            };
          });
          this.product_list = JSON.parse(JSON.stringify(templist));
          this.pagination = paginate;
        }

        this.cs.isLoading.next(false);
        this.loading = false;
      });
  }
  pageNumberClick(pageNumber) {
    this.pagination['CurrentPage'] = pageNumber;
    this.getProducts();
  }
  prevPage() {
    if (this.pagination.CurrentPage > 1) {
      this.pagination['CurrentPage'] = this.pagination.CurrentPage - 1;
      this.getProducts();
    }
  }
  nextPage() {
    this.pagination['CurrentPage'] = this.pagination.CurrentPage + 1;
    this.getProducts();
  }

  onDelete(prod) {
    // this.loading = true;
    this.productService.deleteProduct(prod.uuid).subscribe((res) => {
      // this.cs.isLoading.next(false);
      // this.loading = false;
      this.getProducts();
    });
  }
}
