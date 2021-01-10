import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '@ks89/angular-modal-gallery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/service/order-service/order.service';
import { CommonService } from 'src/app/shared/service/common.service';
import { Order } from 'src/app/shared/interfaces/order';
import * as moment from 'moment';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class OrderDetailComponent implements OnInit {
  public closeResult: string;
  public status: string;
  public reason: string;
  public reasonDesc: string;

  public total: number;
  public img: string = 'assets/images/user.png';
  public order: Order;
  public dummyData = {
    'order id': '#51240',
    products: [
      'assets/images/electronics/product/25.jpg',
      'assets/images/electronics/product/13.jpg',
      'assets/images/electronics/product/16.jpg',
    ],
    payment_status: 'Paid',
    payment_method: 'Stripe',
    invoice_no: '123456',
    shipment_method: 'SF Express',
    user_info: {
      name: 'John Doe',
      contact: '714-508-5350',
      address: '17601 N Thomas Hill Rd, Sturgeon, MO, 65284',
    },
    shipping_address: '560 Graysville Rd, Guthrie, KY, 42234',
    billing_address: '17601 N Thomas Hill Rd, Sturgeon, MO, 65284',
    order_status: 'Delivered',
    date: 'Dec 10,18',
    total: 54671,
  };

  public orderId: string;
  public fetching: boolean = false;
  constructor(
    private modalService: NgbModal,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private cs: CommonService
  ) {
    this.status = this.dummyData.order_status;
    if (this.activeRoute.params['value'].id) {
      this.orderId = this.activeRoute.params['value'].id;
      this.fetchOrderById(this.orderId);
    }
  }

  open(content) {
    console.log(content);

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

  ngOnInit() { }

  fetchOrderById(id) {
    this.fetching = true;
    this.orderService.getOrderById(id).subscribe((res) => {
      if (res) {
        console.log('fetch res---', res.body);
        this.order = res.body;
        this.cs.isLoading.next(false);
        this.fetching = false;
      }
    });
  }

  changeTotal(content) {
    // this.total = Number(this.dummyData.total);
    this.open(content);
  }

  updateTotal() {
    this.dummyData.total = this.dummyData.total + this.total;
    this.modalService.dismissAll('save button clicked');
  }

  changeStatus(content) {
    this.open(content);
  }

  updateStatus() {
    this.dummyData.order_status = this.status;
    this.modalService.dismissAll('save button clicked');
  }

  changeShipmentMethod(content) {
    this.open(content);
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
      this.img = reader.result.toString();
    };
  }

  openInvoice(content) {
    console.log(content);

    this.open(content);
  }

  formatDate(date) {
    return moment(date).format('MMM DD,YY');
  }
}
