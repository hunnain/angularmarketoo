import { Component, OnInit, ElementRef } from '@angular/core';
import { invoiceDB } from '../../shared/tables/invoice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss'],
})
export class ReferComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private fb: FormBuilder, private elementRef: ElementRef) {
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
}
