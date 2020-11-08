import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '@ks89/angular-modal-gallery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss'],
  providers: [NgbRatingConfig]
})
export class ViewDetailComponent implements OnInit {
  public closeResult: string;
  public status: string;
  public refund_reason: string;
  public reason: string;
  public reasonDesc: string;

  public total: number;
  public img:string="assets/images/user.png";
  
  public dummyData =  {
    "order id": "#51240",
    "products":[
      {
        name:'Product 1',qty:2,price:10,
        img:'assets/images/digital-product/product-1.png'
      },
      {
        name:'Product 2',qty:1,price:20,
        img:'assets/images/digital-product/product-2.png'
      },
      {
        name:'Product 3',qty:3,price:30,
        img:'assets/images/digital-product/product-4.png'
      }
    ],
    "type": "Exchange",
    "requested_on": "Dec 10,18",
    "remarks":'Mismatch items',
    "total": 54671,
    "user_info":{
      name:"John Doe",
      contact:'714-508-5350',
      address: "17601 N Thomas Hill Rd, Sturgeon, MO, 65284",
    },
}

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  ngOnInit() {
  }


  changeTotal(content){
    // this.total = Number(this.dummyData.total);
    this.open(content)
  }

  updateTotal(){
    this.dummyData.total = this.dummyData.total + this.total;
    this.modalService.dismissAll("save button clicked")
  }

  changeStatus(content){
    this.open(content)
  }

  updateStatus(){
    // this.dummyData.order_status = this.status
    this.modalService.dismissAll("save button clicked")
  }

  changeShipmentMethod(content){
    this.open(content)
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
      this.img = reader.result.toString();
    }
  }

  openInvoice(content){
    this.open(content)
  }

}
