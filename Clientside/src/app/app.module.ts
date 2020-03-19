import { ViewOrderComponent } from './Distributor/Components/Book Order/View Order/view-order.component';
import { AddItemsComponent } from './Distributor/Components/Book Order/Add Items/add-items.component';
import { OrderComponent } from './Distributor/Components/Book Order/Order/order.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { 
  MatButtonModule,
  MatNativeDateModule,
  MatIconModule, 
  MatSidenavModule, 
  MatListModule, 
  MatToolbarModule, 
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatTabsModule,
  MatSelectModule,
  MatDialogModule,
  MatDialogRef, 
  MAT_DIALOG_DATA,
  MatPaginatorModule,
<<<<<<< HEAD
  MatMenuModule
=======
  MatDatepickerModule
>>>>>>> f925e02868c44d4c97f978603205fb536877a9b2

} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './Main Page/Components/mainpage.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { ForgetpassComponent } from './Forgot Password/Components/forgetpass.component';
import { DistributorYourOrderComponent } from './Distributor/Components/Your Order/dis-yourorder.component';
import { DistributorDashboardComponent } from './Distributor/Components/Dashboard/dis-dashboard.component';
import { DistributorNavigationComponent } from './Distributor/Components/Navigation/dis-navigation.component';
import { CommonModule } from '@angular/common';
import { IncomingOrdersComponent } from './Distributor/Components/Incoming Orders/incoming-orders.component';
import { OutgoingOrdersComponent } from './Distributor/Components/Outgoing Orders/outgoing-orders.component';
import { UpdateProfileComponent } from './Distributor/Components/Profile/Update Profile/update-profile.component';
import { DistributorProfileComponent } from './Distributor/Components/Profile/dis-profile.component';
import { ListOfManufacturerComponent } from './Distributor/Components/list-of-manufacturer/list-of-manufacturer.component';
import { ListOfPharmacistComponent } from './Distributor/Components/list-of-pharmacist/list-of-pharmacist.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassComponent,
    DistributorDashboardComponent,
    DistributorYourOrderComponent,
    DistributorNavigationComponent,
    IncomingOrdersComponent,
    OutgoingOrdersComponent,
    DistributorProfileComponent,
    UpdateProfileComponent,
    ListOfManufacturerComponent,
    ListOfPharmacistComponent,
    OrderComponent,
    AddItemsComponent,
    ViewOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AngularFontAwesomeModule,
    MatTabsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    HttpModule,

    CommonModule,
    MatButtonModule,
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule, 
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatDialogModule,
    MatPaginatorModule,
<<<<<<< HEAD
    MatMenuModule
=======
    MatDatepickerModule
>>>>>>> f925e02868c44d4c97f978603205fb536877a9b2
  ],
  entryComponents:[AddItemsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
