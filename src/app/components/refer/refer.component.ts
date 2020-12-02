import { Component, OnInit, ElementRef } from '@angular/core';
import { invoiceDB } from '../../shared/tables/invoice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss'],
})
export class ReferComponent implements OnInit {
  public userForm: FormGroup;
  public closeResult: string;

  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private modalService: NgbModal
  ) {
    this.userForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$'),
        ],
      ],
      description_1: [''],
      description_2: [''],
    });
  }
  open(content) {
    this.modalService
      .open(content, {
        size: 'xl',
        backdrop: 'static',
        ariaLabelledBy: 'modal-basic-title',
      })
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

  public settings = {
    actions: {
      position: 'right',
    },
    columns: {
      no: {
        title: 'No',
      },
      invoice: {
        title: 'Invoice',
      },
      date: {
        title: 'Date',
      },
      shipping: {
        title: 'Shipping',
      },
      amount: {
        title: 'Amount',
      },
      tax: {
        title: 'Tax',
      },
      total: {
        title: 'Total',
      },
    },
  };

  ngOnInit() {}

  getEmails = (data) => {
    console.log(data);
  };

  openDoc(content) {
    this.open(content);
  }
}
