import { ForgetpassComponent } from './Login/Components/Forgot Password/forgetpass.component';
import { ManufacturerDashboardComponent } from './Manufacturer/Components/Dashboard/manu-dashboard.component';
import { ManufacturerNavigationComponent } from './Manufacturer/Components/Navigation/manu-navigation.component';
import { ManufacturerProfileComponent } from './Manufacturer/Components/Profile/manu-profile.component';
import { ManufacturerChangePasswordComponent } from './Manufacturer/Components/Profile/Change Password/manu-change-password.component';
import { ManufacturerUpdateProfileComponent } from './Manufacturer/Components/Profile/Update Profile/manu-update-profile.component';
import { ManufacturerOrderComponent } from './Manufacturer/Components/Book Order/Order/manu-order.component';
import { ManufacturerAddItemsComponent } from './Manufacturer/Components/Book Order/Add Items/manu-add-items.component';
import { ManufacturerShowProductsComponent } from './Manufacturer/Components/Your Order/Show Products/manu-show-products.component';
import { ManufacturerViewOrderComponent } from './Manufacturer/Components/Your Order/View Order/manu-view-order.component';
import { ManufacturerIncomingOrdersComponent } from './Manufacturer/Components/Incoming Orders/manu-incoming-orders.component';

import { DistributorUpdateProfileComponent } from './Distributor/Components/Profile/Update Profile/dis-update-profile.component';
import { DistributorShowProductsComponent } from './Distributor/Components/Your Order/Show Products/dis-show-products.component';
import { DistributorAddItemsComponent } from './Distributor/Components/Book Order/Add Items/dis-add-items.component';
import { DistributorOrderComponent } from './Distributor/Components/Book Order/Order/dis-order.component';
import { DistributorChangePasswordComponent } from './Distributor/Components/Profile/Change Password/dis-change-password.component';
import { DistributorOutgoingOrdersComponent } from './Distributor/Components/Outgoing Orders/dis-outgoing-orders.component';
import { DistributorIncomingOrdersComponent } from './Distributor/Components/Incoming Orders/dis-incoming-orders.component';
import { DistributorViewOrderComponent } from './Distributor/Components/Your Order/View Order/dis-view-order.component';
import { ListOfPharmacistComponent } from './Distributor/Components/List of Pharmacists/list-of-pharmacist.component';
import { AddManufacturerComponent } from './Distributor/Components/List of Manufacturers/Add Manufacturer/add-manufacturer.component';
import { SubscribedManufacturersComponent } from './Distributor/Components/List of Manufacturers/Subscribed Manufacturers/subscribed-manufacturers.component';
import { DistributorDashboardComponent } from './Distributor/Components/Dashboard/dis-dashboard.component';
import { DistributorNavigationComponent } from './Distributor/Components/Navigation/dis-navigation.component';
import { DistributorProfileComponent } from './Distributor/Components/Profile/dis-profile.component';

import { PharmacistUpdateProfileComponent } from './Pharmacist/Components/Profile/Update Profile/pharm-update-profile.component';
import { PharmacistOrderComponent } from './Pharmacist/Components/Book Order/Order/pharm-order.component';
import { PharmacistAddItemsComponent } from './Pharmacist/Components/Book Order/Add Items/pharm-add-items.component';
import { AddDistributorComponent } from './Pharmacist/Components/List of Distributors/Add Distributor/add-distributor.component';
import { SubscribedDistributorsComponent } from './Pharmacist/Components/List of Distributors/Subscribed Distributor/subscribed-distributors.component';
import { PharmacistOutgoingOrdersComponent } from './Pharmacist/Components/Outgoing Orders/pharm-outgoing-orders.component';
import { PharmacistChangePasswordComponent } from './Pharmacist/Components/Profile/Change Password/pharm-change-password.component';
import { PharmacistProfileComponent } from './Pharmacist/Components/Profile/pharm-profile.component';
import { PharmacistShowProductsComponent } from './Pharmacist/Components/Your Order/Show Products/pharm-show-products.component';
import { PharmacistViewOrderComponent } from './Pharmacist/Components/Your Order/View Order/pharm-view-order.component';
import { PharmacistDashboardComponent } from './Pharmacist/Components/Dashboard/pharm-dashboard.component';
import { PharmacistNavigationComponent } from './Pharmacist/Components/Navigation/pharm-navigation.component';

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

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './Main Page/Components/mainpage.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassComponent,

    DistributorDashboardComponent,
    DistributorViewOrderComponent,
    DistributorNavigationComponent,
    DistributorIncomingOrdersComponent,
    DistributorOutgoingOrdersComponent,
    DistributorProfileComponent,
    DistributorChangePasswordComponent,
    SubscribedManufacturersComponent,
    ListOfPharmacistComponent,
    DistributorOrderComponent,
    DistributorAddItemsComponent,
    DistributorViewOrderComponent,
    DistributorShowProductsComponent,
    DistributorUpdateProfileComponent,
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

    ManufacturerDashboardComponent,
    ManufacturerNavigationComponent,
    ManufacturerProfileComponent,
    ManufacturerChangePasswordComponent,
    ManufacturerUpdateProfileComponent,
    ManufacturerOrderComponent,
    ManufacturerAddItemsComponent,
    ManufacturerShowProductsComponent,
    ManufacturerViewOrderComponent,
    ManufacturerIncomingOrdersComponent,
    PharmacistUpdateProfileComponent
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
    DistributorAddItemsComponent,
    PharmacistAddItemsComponent,
    ManufacturerAddItemsComponent,
    DistributorShowProductsComponent,
    PharmacistShowProductsComponent,
    ManufacturerShowProductsComponent,
    AddManufacturerComponent,
    AddDistributorComponent,
    PharmacistUpdateProfileComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
