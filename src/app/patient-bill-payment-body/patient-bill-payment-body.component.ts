import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { PaymentService } from './payment.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patient-bill-payment-body',
  templateUrl: './patient-bill-payment-body.component.html',
  styleUrls: ['./patient-bill-payment-body.component.css'],
})
export class PatientBillPaymentBodyComponent {
  panelOpenState = false;

  length = 0;
  pageSize = 0;
  pageIndex = 0;
  pageSizeOptions = [10, 20, 30];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent;

  disableBillPaymentForm: boolean;
  disableBillPaymentFormSub: Subscription;
  saveLoading: boolean = false;
  saved: boolean = false;
  paymentMethods = [
    { id: 1, name: 'Mobile Money' },
    { id: 2, name: 'Cheque' },
    { id: 3, name: 'Cash' },
  ];
  currencies = [
    { id: 1, name: 'GHS' },
    { id: 2, name: 'USD' },
  ];
  banks = [{ id: 1, name: 'Personal Bank Account' }];
  billPaymentForm = new FormGroup({
    clientId: new FormControl(),
    serviceOutStandingBill: new FormControl(),
    drugsOutstandingBill: new FormControl(),
    totalOutstandingBill: new FormControl(),
    servicesCurrentBill: new FormControl(),
    drugsCurrentBill: new FormControl(),
    totalCurrentBill: new FormControl(),
    totalDeposit: new FormControl(),
    totalDiscount: new FormControl(),
    totalIOU: new FormControl(),
    grandTotal: new FormControl(),
    totalBill: new FormControl(),
    paymentMode: new FormControl(),
    currency: new FormControl(),
    amountTendered: new FormControl(),
    cash: new FormControl(),
    changeAmount: new FormControl(),
    cheque: new FormControl(),
    transactionId: new FormControl(),
    bank: new FormControl(),
  });

  constructor(private paymentService: PaymentService) {}

  ngOnInit() {
    this.disableBillPaymentForm = this.paymentService.billPaymentFormDisabled;
    this.disableBillPaymentFormSub =
      this.paymentService.billPaymentFormDisabledSub.subscribe((val) => {
        this.disableBillPaymentForm = val;
      });
  }

  saveForm() {
    this.saveLoading = true;
    setTimeout(() => {
      this.saved = true;
      setTimeout(() => {
        // console.log(this.billPaymentForm.value);
        this.saved = false;
        this.saveLoading = false;
        this.billPaymentForm.reset();
        this.paymentService.disableBillPaymentForm();
      }, 2000);
    }, 3000);
  }
  ngOnDestroy() {
    this.disableBillPaymentFormSub.unsubscribe();
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
}
