import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  billPaymentFormDisabled: boolean = true;
  billPaymentFormDisabledSub = new Subject<boolean>();

  startPayment(user) {
    this.billPaymentFormDisabled = false;
    this.billPaymentFormDisabledSub.next(this.billPaymentFormDisabled);
  }

  disableBillPaymentForm() {
    this.billPaymentFormDisabled = true;
    this.billPaymentFormDisabledSub.next(this.billPaymentFormDisabled);
  }
}
