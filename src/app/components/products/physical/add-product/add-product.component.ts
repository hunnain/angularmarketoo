import { Component, ElementRef, OnInit,AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { $ } from 'protractor';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public productForm: FormGroup;
  public counter: number = 1;
  public sizeImg:string="assets/images/user.png";
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
  }
  ]

  public labelOptions: Array<Select2OptionData>;
  public sizeOptions: Array<Select2OptionData>;
  public options: Options;
 

  public mainCategories = [
    {id:'acces',name:'Accessories'},
    {id:'cloth',name:'Clothing'},
    {id:'stat',name:'Stationery'},
    {id:'dn',name:'Daily Necessities'},
    {id:'hr',name:'Handbag/ Rucksack'},
    {id:'sc',name:'Skin Care'},
    {id:'le',name:'Leisure Experience'},
  ]
  public subCategories = {
    'acces':[
      {id:'acces-w',name:'Womens Accessories'},
      {id:'acces-m',name:'Mens Accessories'},
      {id:'acces-ca',name:'Couple Accessories'},
      {id:'acces-mem',name:'Masks/ Eye Masks'}
    ],
    "cloth":[
      {id:'cloth-w',name:'Womenswear'},
      {id:'cloth-m',name:'Menswear'},
      {id:'cloth-cc',name:'Couple Clothing'}
    ],
    "stat":[
      {id:'stat-pp',name:'Paper Products'},
      {id:'stat-s',name:'Stationery'},
    ],
    "dn":[
      {id:'dn-hd',name:'Home Decoration'},
      {id:'dn-ku',name:'Kitchen Utensils'},
      {id:'dn-f',name:'Food'},
      {id:'dn-o',name:'Others'},
    ],
    "hr":[
      {id:'hr-l',name:'Ladies'},
      {id:'hr-m',name:'Men’s'},
      {id:'hr-o',name:'Others'},
    ],
    "sc":[
      {id:'sc-w',name:'Womens'},
      {id:'sc-m',name:'Mens'},
    ],
    "le":[
      {id:'le-h',name:'Handicraft'},
      {id:'le-o',name:'Others'},
    ]
  }


  public extendedCategories = {
    "acces-w":[
      {id:'acces-w-j',name:'Jewellery'},
      {id:'acces-w-ha',name:'Hair Accessories'},
      {id:'acces-w-ss',name:'Scraves/ Shawl'},
      {id:'acces-w-w',name:'Watches'},
      {id:'acces-w-g',name:'Glasses'},
      {id:'acces-w-o',name:'Other'},
    ],
    "acces-m":[
      {id:'acces-m-t',name:'Ties'},
      {id:'acces-m-w',name:'Watches'},
      {id:'acces-m-g',name:'Glasses'},
      {id:'acces-m-b',name:'Belts'},
      {id:'acces-m-h',name:'Hats'},
      {id:'acces-m-j',name:'Jewellery'},
      {id:'acces-m-ss',name:'Scraves/ Shawl'},
      {id:'acces-m-o',name:'Other'},
    ],
    "acces-ca":[],
    "acces-mem":[
      {id:'acces-mem-m',name:'Masks'},
      {id:'acces-mem-em',name:'Eye Masks'},
    ],
    "cloth-w":[
      {id:'cloth-w-b',name:'Blouse'},
      {id:'cloth-w-s',name:'Skirts'},
      {id:'cloth-w-t',name:'Trousers'},
      {id:'cloth-w-k',name:'Knitwear'},
      {id:'cloth-w-j',name:'Jacket'},
      {id:'cloth-w-l',name:'Lingerie'},
      {id:'cloth-w-h',name:'Homewear'},
      {id:'cloth-w-sptw',name:'Sportwear'},
      {id:'cloth-w-swimw',name:'Swimwear'},
      {id:'cloth-w-socks',name:'Socks'},
      {id:'cloth-w-shoes',name:'Shoes'},
      {id:'cloth-w-o',name:'Other'},
    ],
    "cloth-m":[
      {id:'cloth-m-b',name:'Blouse'},
      {id:'cloth-m-t',name:'Trousers'},
      {id:'cloth-m-k',name:'Knitwear'},
      {id:'cloth-m-j',name:'Jacket'},
      {id:'cloth-m-u',name:'Underwear'},
      {id:'cloth-m-h',name:'Homewear'},
      {id:'cloth-m-sptw',name:'Sportwear'},
      {id:'cloth-m-swimw',name:'Swimwear'},
      {id:'cloth-m-socks',name:'Socks'},
      {id:'cloth-m-shoes',name:'Shoes'},
      {id:'cloth-m-o',name:'Other'},
    ],
    "cloth-cc":[],
    "stat-pp":[
      {id:'stat-pp-pc',name:'(Post Cards) 148mm x 110mm'},
      {id:'stat-pp-s',name:'Stickers'},
      {id:'stat-pp-t',name:'Tapes'},
      {id:'stat-pp-pstg',name:'Postage'},
      {id:'stat-pp-ewp',name:'Envelopes/ Writing Papers'},
      {id:'stat-pp-rprb',name:'Red Pockets/ Red Banners'},
      {id:'stat-pp-pbpb',name:'Paper Boxes/ Package Boxes'},
      {id:'stat-pp-nb',name:'Notebooks'},
      {id:'stat-pp-a',name:'Albums'},
      {id:'stat-pp-clndr',name:'Calenders'},
      {id:'stat-pp-o',name:'Other'},
    ],
    "stat-s":[
      {id:'stat-s-pens',name:'Pens'},
      {id:'stat-s-pspb',name:'Pen Cases/ Pen Bags'},
      {id:'stat-s-pspv',name:'Pen Stands/ Pen Vases'},
      {id:'stat-s-f',name:'Folders'},
      {id:'stat-s-ssp',name:'Stamps/ Stamp Pads'},
      {id:'stat-s-bm',name:'Bookmarks'},
      {id:'stat-s-sc',name:'Slipcases'},
      {id:'stat-s-o',name:'Other'},
    ],
    "dn-hd":[
      {id:'dn-hd-fd',name:'Furnish and Decorate'},
      {id:'dn-hd-cs',name:'Candles/ scents'},
      {id:'dn-hd-ppp',name:'Plants/ Potted Plants'},
      {id:'dn-hd-vc',name:'Vases/ China'},
      {id:'dn-hd-pstpaint',name:'Posters/ Paintings'},
      {id:'dn-hd-pc',name:'Portrait Customisation'},
      {id:'dn-hd-wsw',name:'Wall Stickers/ Wallpapers'},
      {id:'dn-hd-pfpf',name:'Painting Frames/ Photo Frames'},
      {id:'dn-hd-df',name:'Dolls/ Figures'},
      {id:'dn-hd-ss',name:'Storage Sets'},
      {id:'dn-hd-fb',name:'Furniture/ Beddings'},
      {id:'dn-hd-o',name:'Other'},
    ],
    "dn-ku":[
      {id:'dn-ku-cups',name:'Cups'},
      {id:'dn-ku-cutlr',name:'Cutleries'},
      {id:'dn-ku-kw',name:'Kitchenware'},
      {id:'dn-ku-o',name:'Other'},
    ],
    "dn-f":[
      {id:'dn-f-bvg',name:'Beverage'},
      {id:'dn-f-bkrs',name:'Bakeries'},
      {id:'dn-f-sncks',name:'Snacks'},
      {id:'dn-f-s',name:'Seasonings'},
      {id:'dn-f-o',name:'Other'},
    ],
    "dn-o":[
      {id:'dn-o-ps',name:'Pet Supplies'},
      {id:'dn-o-seg',name:'Sport Equipment/ Gear'},
      {id:'dn-o-tch',name:'Technology'},
      {id:'dn-o-dm',name:'DIY Materials'},
    ],
    "hr-l":[
      {id:'hr-l-clutch',name:'Clutches'},
      {id:'hr-l-cbb',name:'Crossbody Bags'},
      {id:'hr-l-sb',name:'Shoulder Bags'},
      {id:'hr-l-csmb',name:'Cosmetic Bag'},
      {id:'hr-l-w',name:'Wallet'},
      {id:'hr-l-rs',name:'Rucksacks'},
      {id:'hr-l-o',name:'Other'},
    ],
    "hr-m":[
      {id:'hr-m-sb',name:'Shoulder Bags'},
      {id:'hr-m-mssb',name:'Messenger Bags'},
      {id:'hr-m-rs',name:'Rucksacks'},
      {id:'hr-m-bc',name:'Briefcases'},
      {id:'hr-m-w',name:'Wallet'},
      {id:'hr-m-o',name:'Other'},
    ],
    "hr-o":[
      {id:'hr-o-lp',name:'Laptop Pouch'},
      {id:'hr-o-tbsc',name:'Travel Bags/ Suitcases'},
      {id:'hr-o-gb',name:'Gadget Bags'},
      {id:'hr-o-o',name:'Other'},
    ],
    "sc-w":[
      {id:'sc-w-cp',name:'Cosmetic Products'},
      {id:'sc-w-sp',name:'Skincare Products'},
      {id:'sc-w-bp',name:'Body Products'},
      {id:'sc-w-hp',name:'Hair Products'},
      {id:'sc-w-bt',name:'Beauty Tools'},
      {id:'sc-w-np',name:'Nail Products'},
      {id:'sc-w-f',name:'Fragrance'},
      {id:'sc-w-o',name:'Other'},
    ],
    "sc-m":[
      {id:'sc-m-bp',name:'Body Products'},
      {id:'sc-m-sp',name:'Skincare Products'},
      {id:'sc-m-hp',name:'Hair Products'},
      {id:'sc-m-f',name:'Fragrance'},
      {id:'sc-m-bp',name:'Beard Products'},
      {id:'sc-m-o',name:'Other'},
    ],
    "le-h":[
      {id:'le-h-acces',name:'Accessories'},
      {id:'le-h-ca',name:'Candles/ Aromatherapy'},
      {id:'le-h-plant',name:'Planting'},
      {id:'le-h-g',name:'Gourmet'},
      {id:'le-h-ipc',name:'Illustration/ Painting/ Calligraphy'},
      {id:'le-h-lc',name:'Leathercrafting'},
      {id:'le-h-cp',name:'Carpentry'},
      {id:'le-h-pottery',name:'Pottery'},
      {id:'le-h-knit',name:'Knitting'},
      {id:'le-h-o',name:'Other'},
    ],
    "le-o":[
      {id:'le-o-oa',name:'Outdoor Activities'},
      {id:'le-o-ia',name:'Indoor Activities'},
      {id:'le-o-cs',name:'Casual Seminar'},
      {id:'le-o-o',name:'Other'},
    ]

  }
 
  get main_category(){
    return this.productForm.get('category');
  }
  
  get sub_category(){
    return this.productForm.get('sub_category');
  }

  get extended_category(){
    return this.productForm.get('extended_category');
  }

  get custom_size(){
    return this.productForm.get('customSize');
  }

  constructor(private fb: FormBuilder,private elementRef:ElementRef) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      price: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      code: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      size: ['', Validators.required],
      category: ['', Validators.required],
      sub_category: ['', Validators.required],
      extended_category: ['', Validators.required],
      labels: [''],
      sizes: [''],
      customSize:[false]
    })


    this.sizeOptions = [
      {id:'xs',text:"XS"},
      {id:'s',text:"S"},
      {id:'m',text:"M"},
      {id:'l',text:"L"},
      {id:'xl',text:"XL"},
      {id:'xxl',text:"XXL"},
    ]
    this.labelOptions = [
      {id:'#gifts',text:"Gifts"},
      {id:'#recommendedgifts',text:"Recommended Gifts"},
      {id:'#customgifts',text:"Custom Gifts"},
      {id:'#diygifts',text:"DIY Gifts"},
      {id:'#birthdaygifts',text:"Birthday Presents"},
      {id:'#valentinesgifts',text:"Valentines Gifts"},
      {id:'#couplegifts',text:"Couples Gifts"},
      {id:'#anniversarygifts',text:"Anniversary Gifts"},
      {id:'#mothersdaygifts',text:"Mother’s Day Gifts"},
      {id:'#fathersdaygifts',text:"Father’s Day Gifts"},
      {id:'#girlfriendgifts',text:"Girlfriend Gifts"},
      {id:'#boyfriendgifts',text:"Boyfriend Gifts"},
      {id:'#giftsexchange',text:"Gifts Exchange"},
      {id:'#graduationgifts',text:"Graduation Gifts"},
      {id:'#weddinggifts',text:"Wedding Gifts"},
      {id:'#bridalgifts',text:"Bridal Gifts"},
      {id:'#christmasgifts',text:"Christmas Gifts"},
      {id:'#heartfeltgifts',text:"Heartfelt Gifts"},
      {id:'#bestiegifts',text:"Bestie Gifts"},
      {id:'#coupleoutfits',text:"Couple Outfits"},
      {id:'#parentchildoutfit',text:"Parent Child Outfit"},
      {id:'#hipsterlook',text:"Hipster Look"},
      {id:'#trending',text:"Trending"},
      {id:'#minimalstyle',text:"Minimal Style"},
      {id:'#kawai',text:"Kawai"},
      {id:'#soothing',text:"Soothing"},
      {id:'#romantic',text:"Romantic"},
      {id:'#vintage',text:"Vintage"},
      {id:'#stylish',text:"Stylish"},
      {id:'#animals',text:"Animals"},
      {id:'#forestry',text:"Forestry"},
      {id:'#japanese',text:"Japanese"},
      {id:'#finesilver',text:"Fine Silver"},
      {id:'#rosegold',text:"Rosegold"},
      {id:'#dyedwhite',text:"Dyed white"},
      {id:'#slimcut',text:"Slim Cut"},
      {id:'#handmadegoods',text:"Handmade goods"},
      {id:'#handicrafts',text:"Handicrafts"},
      {id:'#handpainted',text:"Hand Painted"},
      {id:'#environmentalfriendly',text:"Environmental Friendly"},
      {id:'#workshop',text:"Workshop"},
      {id:'#extracurricularactivities',text:"Extracurricular Activities"},
      {id:'#weekendspots',text:"Weekend Spots"},
      {id:'#parentchildspots',text:"Parent Child Spots"},
      {id:'#couplespots',text:"Couples Spots"},
      {id:'#datingspots',text:"Dating Spots"},
      {id:'#weekendmarkets',text:"Weekend Markets"},
      {id:'#hongkongdesigns',text:"Hong Kong Designs"},
      {id:'#hongkongbrands',text:"Hong Kong Brands"},
      {id:'#originaldesign',text:"Original Design"}
        ]
      
        let self = this
        this.options = {
          multiple: true,
          theme: 'classic',
          closeOnSelect: false,
          width: '100%',
          language: {
            noResults: function() {
              return `No label found <span id='no-results-btn'>Request Label</span>`;
            },
          },
          escapeMarkup: function (markup) {
            return markup;
          }
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
    if(this.counter > 0){
      this.counter -= 1;
    }
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

  //FileUpload
  readUrlSizeImg(event: any) {
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
      this.sizeImg = reader.result.toString();
    }
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let elem = this.elementRef.nativeElement.querySelector('#no-results-btn')
    console.log(elem)
    if(elem) elem.addEventListener('click', this.noResultsButtonClicked.bind(this));
    
  }
  

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    autoProcessQueue:false,
    autoQueue:false,
    addRemoveLinks:true
  };

  public onUploadInit(args: any): void { }

  public onUploadError(args: any): void { }

  public onUploadSuccess(args: any): void { }
}
