import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PatientBillPaymentBodyComponent } from './patient-bill-payment-body/patient-bill-payment-body.component';
import { TableComponent } from './patient-bill-payment-body/table/table.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { RightCardComponent } from './right-card/right-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    SidenavComponent,
    PatientBillPaymentBodyComponent,
    TableComponent,
    PatientListComponent,
    CustomInputComponent,
    RightCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
