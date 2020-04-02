import { PharmacistOrderComponent } from './Pharmacist/Components/Book Order/Order/pharm-order.component';
import { PharmacistAddItemsComponent } from './Pharmacist/Components/Book Order/Add Items/pharm-add-items.component';
import { AddDistributorComponent } from './Pharmacist/Components/List of Distributors/Add Distributor/add-distributor.component';
import { SubscribedDistributorsComponent } from './Pharmacist/Components/List of Distributors/Subscribed Distributor/subscribed-distributors.component';
import { PharmacistOutgoingOrdersComponent } from './Pharmacist/Components/Outgoing Orders/pharm-outgoing-orders.component';
import { PharmacistChangePasswordComponent } from './Pharmacist/Components/Profile/Change-Password/pharm-change-password.component';
import { PharmacistProfileComponent } from './Pharmacist/Components/Profile/pharm-profile.component';
import { PharmacistShowProductsComponent } from './Pharmacist/Components/Your Order/Show Products/pharm-show-products.component';
import { PharmacistViewOrderComponent } from './Pharmacist/Components/Your Order/View Order/pharm-view-order.component';
import { PharmacistDashboardComponent } from './Pharmacist/Components/Dashboard/pharm-dashboard.component';
import { PharmacistNavigationComponent } from './Pharmacist/Components/Navigation/pharm-navigation.component';
import { ListOfPharmacistComponent } from './Distributor/Components/List of Pharmacists/list-of-pharmacist.component';
import { AddManufacturerComponent } from './Distributor/Components/List of Manufacturers/Add Manufacturer/add-manufacturer.component';
import { SubscribedManufacturersComponent } from './Distributor/Components/List of Manufacturers/Subscribed Manufacturers/subscribed-manufacturers.component';
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
  MatMenuModule,
  MatDatepickerModule,
  MatBadgeModule,
  MatCheckboxModule

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
import { ChangePasswordComponent } from './Distributor/Components/Profile/Change-Password/change-password.component';
import { DistributorProfileComponent } from './Distributor/Components/Profile/dis-profile.component';
import { ShowProductsComponent } from './Distributor/Components/Book Order/Show Products/show-products.component';

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
    ChangePasswordComponent,
    SubscribedManufacturersComponent,
    ListOfPharmacistComponent,
    OrderComponent,
    AddItemsComponent,
    ViewOrderComponent,
    ShowProductsComponent,
    AddManufacturerComponent,

    PharmacistDashboardComponent,
    PharmacistViewOrderComponent,
    PharmacistNavigationComponent,
    PharmacistShowProductsComponent,
    PharmacistProfileComponent,
    PharmacistChangePasswordComponent,
    PharmacistOutgoingOrdersComponent,
    SubscribedDistributorsComponent,
    AddDistributorComponent,
    PharmacistAddItemsComponent,
    PharmacistOrderComponent,
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
    MatMenuModule,
    MatDatepickerModule,
    MatBadgeModule,
    MatCheckboxModule
  ],
  entryComponents:[
    AddItemsComponent,
    PharmacistAddItemsComponent,
    ShowProductsComponent,
    PharmacistShowProductsComponent,
    AddManufacturerComponent,
    AddDistributorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
