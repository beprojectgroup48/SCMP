import { UpdateProfileComponent } from './Distributor/Components/Profile/Update Profile/update-profile.component';
import { DistributorProfileComponent } from './Distributor/Components/Profile/dis-profile.component';
import { DistributorBookOrderComponent } from './Distributor/Components/Book Order/dis-bookorder.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';

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
  MatSelectModule

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

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassComponent,
    DistributorDashboardComponent,
    DistributorYourOrderComponent,
    DistributorBookOrderComponent,
    DistributorNavigationComponent,
    IncomingOrdersComponent,
    OutgoingOrdersComponent,
    DistributorProfileComponent,
    UpdateProfileComponent
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
