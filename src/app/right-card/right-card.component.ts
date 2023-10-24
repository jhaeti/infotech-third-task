import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Subscription, map } from 'rxjs';
import { PaymentService } from '../patient-bill-payment-body/payment.service';

function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Custom_Label:';

  return customPaginatorIntl;
}

@Component({
  selector: 'app-right-card',
  templateUrl: './right-card.component.html',
  styleUrls: ['./right-card.component.css'],
})
export class RightCardComponent {
  show: boolean = false;
  queue: {
    id: number;
    name: string;
    username: string;
    email: string;
    number: string;
    companyName: string;
  }[];
  selectedUserForPayment;
  disablePaymentForm: boolean;
  disablePaymentFormSub: Subscription;

  constructor(
    private http: HttpClient,
    private paymentService: PaymentService
  ) {}

  ngOnInit() {
    this.disablePaymentForm = this.paymentService.billPaymentFormDisabled;

    this.disablePaymentFormSub =
      this.paymentService.billPaymentFormDisabledSub.subscribe((val) => {
        this.disablePaymentForm = val;
      });

    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((response) => {
          return response.map((item) => ({
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email,
            number: item.phone.split(' ')[0],
            companyName: item.company.name,
          }));
        })
      )
      .subscribe((response) => {
        this.queue = response;
      });
    // this.queue = [
    //   {
    //     id: 1,
    //     name: 'Leanne Graham',
    //     username: 'Bret',
    //     email: 'Sincere@april.biz',
    //     number: '1-770-736-8031',
    //     companyName: 'Romaguera-Crona',
    //   },
    //   {
    //     id: 2,
    //     name: 'Ervin Howell',
    //     username: 'Antonette',
    //     email: 'Shanna@melissa.tv',
    //     number: '010-692-6593',
    //     companyName: 'Deckow-Crist',
    //   },
    //   {
    //     id: 3,
    //     name: 'Clementine Bauch',
    //     username: 'Samantha',
    //     email: 'Nathan@yesenia.net',
    //     number: '1-463-123-4447',
    //     companyName: 'Romaguera-Jacobson',
    //   },
    //   {
    //     id: 4,
    //     name: 'Patricia Lebsack',
    //     username: 'Karianne',
    //     email: 'Julianne.OConner@kory.org',
    //     number: '493-170-9623',
    //     companyName: 'Robel-Corkery',
    //   },
    //   {
    //     id: 5,
    //     name: 'Chelsey Dietrich',
    //     username: 'Kamren',
    //     email: 'Lucio_Hettinger@annie.ca',
    //     number: '(254)954-1289',
    //     companyName: 'Keebler LLC',
    //   },
    //   {
    //     id: 6,
    //     name: 'Mrs. Dennis Schulist',
    //     username: 'Leopoldo_Corkery',
    //     email: 'Karley_Dach@jasper.info',
    //     number: '1-477-935-8478',
    //     companyName: 'Considine-Lockman',
    //   },
    //   {
    //     id: 7,
    //     name: 'Kurtis Weissnat',
    //     username: 'Elwyn.Skiles',
    //     email: 'Telly.Hoeger@billy.biz',
    //     number: '210.067.6132',
    //     companyName: 'Johns Group',
    //   },
    //   {
    //     id: 8,
    //     name: 'Nicholas Runolfsdottir V',
    //     username: 'Maxime_Nienow',
    //     email: 'Sherwood@rosamond.me',
    //     number: '586.493.6943',
    //     companyName: 'Abernathy Group',
    //   },
    //   {
    //     id: 9,
    //     name: 'Glenna Reichert',
    //     username: 'Delphine',
    //     email: 'Chaim_McDermott@dana.io',
    //     number: '(775)976-6794',
    //     companyName: 'Yost and Sons',
    //   },
    //   {
    //     id: 10,
    //     name: 'Clementina DuBuque',
    //     username: 'Moriah.Stanton',
    //     email: 'Rey.Padberg@karina.biz',
    //     number: '024-648-3804',
    //     companyName: 'Hoeger LLC',
    //   },
    // ];
  }

  ngOnDestroy() {
    this.disablePaymentFormSub.unsubscribe();
  }

  start(user) {
    this.selectedUserForPayment = user;
    this.paymentService.startPayment(user);
  }
}
