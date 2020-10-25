import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '@ks89/angular-modal-gallery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [NgbRatingConfig]
})
export class OrderDetailComponent implements OnInit {
  public closeResult: string;
  public status: string;
  public total: number;
  
  public dummyData =  {
    "order id": "#51240",
    "products": ['assets/images/electronics/product/25.jpg',
    'assets/images/electronics/product/13.jpg',
    'assets/images/electronics/product/16.jpg'],
    "payment_status": "Paid",
    "payment_method": "Stripe",
    "invoice_no": "123456",
    "user_info":{
      name:"John Doe",
      contact:'714-508-5350',
      address: "17601 N Thomas Hill Rd, Sturgeon, MO, 65284",

    },
    "shipping_address": "560 Graysville Rd, Guthrie, KY, 42234",
    "billing_address": "17601 N Thomas Hill Rd, Sturgeon, MO, 65284",
    "order_status": "Delivered",
    "date": "Dec 10,18",
    "total": "54671"
}

  constructor(private modalService: NgbModal) {
    this.status = this.dummyData.order_status;
   }

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
    this.total = Number(this.dummyData.total);
    this.open(content)
  }

  updateTotal(){
    this.dummyData.total = this.total.toString();
    this.modalService.dismissAll("save button clicked")
  }

  changeStatus(content){
    this.open(content)
  }

  updateStatus(){
    this.dummyData.order_status = this.status
    this.modalService.dismissAll("save button clicked")
  }

}
