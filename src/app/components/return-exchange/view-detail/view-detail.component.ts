import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Image } from '@ks89/angular-modal-gallery';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { ReturnExchangeService } from 'src/app/shared/service/return-exchange-service/return-exchange.service';
import { CommonService } from 'src/app/shared/service/common.service';
import * as moment from 'moment';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.scss'],
  providers: [NgbRatingConfig],
})
export class ViewDetailComponent implements OnInit {
  public closeResult: string;
  public status: string;
  public refund_reason: string;
  public reason: string;
  public trackingNumber: number;
  public reasonDesc: string;

  public total: number;
  public img: string = 'assets/images/user.png';

  public selectedLang: string = 'en';

  public orderId;
  public order;
  public fetching: boolean = false;
  constructor(
    private modalService: NgbModal,
    private translate: TranslateService,
    private returnService: ReturnExchangeService,
    private cs: CommonService,
    private activeRoute: ActivatedRoute
  ) {
    this.selectedLang = this.translate.currentLang;
    this.translate.onLangChange.subscribe((res) => {
      this.selectedLang = res.lang;
    });

    if (this.activeRoute.params['value'].id) {
      this.orderId = this.activeRoute.params['value'].id;
      this.fetchReturnOrderById(this.orderId);
    }
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

  ngOnInit() { }

  fetchReturnOrderById(id) {
    this.fetching = true;
    this.returnService.getReturnOrderById(id).subscribe((res) => {
      if (res && res['body']) {
        console.log('fetch res---', res.body);
        this.order = res.body;
        this.cs.isLoading.next(false);
        this.fetching = false;
        this.total = this.order.totalAmount
      }
    });
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
    this.open(content);
  }

  showDetail(content) {
    this.open(content);
  }

  submitReturn() {
    console.log('💻=refundreason', this.refund_reason);
    console.log('💻=reason', this.reason);
    console.log('💻=tracknumber', this.trackingNumber);
    let data = {
      refundReason: this.refund_reason,
      refundAmountApproved: this.total,
      trackingNumber: this.trackingNumber
    }
    console.log("data-00--", data);
  }

  getFormatDate(date) {
    return moment(date).format('MMM DD,YY');
  }
}
