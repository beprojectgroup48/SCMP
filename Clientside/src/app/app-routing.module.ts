
//Manufacturer
import { ManufacturerDashboardComponent } from './Manufacturer/Components/Dashboard/manu-dashboard.component';
import { ManufacturerNavigationComponent } from './Manufacturer/Components/Navigation/manu-navigation.component';
import { ManufacturerProfileComponent } from './Manufacturer/Components/Profile/manu-profile.component';
import { ManufacturerChangePasswordComponent } from './Manufacturer/Components/Profile/Change Password/manu-change-password.component';
import { ManufacturerUpdateProfileComponent } from './Manufacturer/Components/Profile/Update Profile/manu-update-profile.component';
import { ManufacturerIncomingOrdersComponent } from './Manufacturer/Components/Incoming Orders/manu-incoming-orders.component';
import { CreateProductComponent } from './Manufacturer/Components/Create Product/create-product.component';
import { TransferOrderComponent } from './Manufacturer/Components/Transfer Order/transfer-order.component';
//Pharmacist
import { PharmacistUpdateProfileComponent } from './Pharmacist/Components/Profile/Update Profile/pharm-update-profile.component';
import { DistributorUpdateProfileComponent } from './Distributor/Components/Profile/Update Profile/dis-update-profile.component';
import { DistributorChangePasswordComponent } from './Distributor/Components/Profile/Change Password/dis-change-password.component';
import { DistributorOutgoingOrdersComponent } from './Distributor/Components/Outgoing Orders/dis-outgoing-orders.component';
import { DistributorIncomingOrdersComponent } from './Distributor/Components/Incoming Orders/dis-incoming-orders.component';
import { DistributorViewOrderComponent } from './Distributor/Components/Your Order/View Order/dis-view-order.component';
import { SubscribedDistributorsComponent } from './Pharmacist/Components/List of Distributors/Subscribed Distributor/subscribed-distributors.component';
import { PharmacistViewOrderComponent } from './Pharmacist/Components/Your Order/View Order/pharm-view-order.component';
import { PharmacistProfileComponent } from './Pharmacist/Components/Profile/pharm-profile.component';
import { PharmacistChangePasswordComponent } from './Pharmacist/Components/Profile/Change Password/pharm-change-password.component';
import { PharmacistOrderComponent } from './Pharmacist/Components/Book Order/Order/pharm-order.component';
import { PharmacistDashboardComponent } from './Pharmacist/Components/Dashboard/pharm-dashboard.component';
import { PharmacistNavigationComponent } from './Pharmacist/Components/Navigation/pharm-navigation.component';

//Distributor
import { SubscribedManufacturersComponent } from './Distributor/Components/List of Manufacturers/Subscribed Manufacturers/subscribed-manufacturers.component';
import { DistributorOrderComponent } from './Distributor/Components/Book Order/Order/dis-order.component';
import { DistributorProfileComponent } from './Distributor/Components/Profile/dis-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { MainPageComponent } from './Main Page/Components/mainpage.component';
import { DistributorNavigationComponent } from './Distributor/Components/Navigation/dis-navigation.component';
import { DistributorDashboardComponent } from './Distributor/Components/Dashboard/dis-dashboard.component';
import { ListOfPharmacistComponent } from './Distributor/Components/List of Pharmacists/list-of-pharmacist.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'',component:MainPageComponent,
    children:[
      {path:'', component:LoginComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent}
  ]},

  {path: 'distributor', redirectTo: 'distributor/dashboard', pathMatch: 'full' },
  {path:'distributor', component:DistributorNavigationComponent,
      children:[
        {path:'dashboard', component:DistributorDashboardComponent},
        {path:'dashboard/incoming-orders',component:DistributorIncomingOrdersComponent},
        {path:'dashboard/outgoing-orders',component:DistributorOutgoingOrdersComponent},
        {path:'bookorder', component:DistributorOrderComponent},
        {path:'yourorder', component:DistributorViewOrderComponent},
        {path:'profile', component:DistributorProfileComponent},
        {path:'profile/edit', component:DistributorChangePasswordComponent},
        {path:'listofmanufacturer', component:SubscribedManufacturersComponent},
        {path:'listofpharmacist', component:ListOfPharmacistComponent},
        {path:'view-order',component:DistributorViewOrderComponent},
        {path:'update-profile',component:DistributorUpdateProfileComponent}
  ]},

  {path: 'pharmacist', redirectTo: 'pharmacist/dashboard', pathMatch: 'full' },
  {path:'pharmacist', component:PharmacistNavigationComponent,
      children:[
        {path:'dashboard', component:PharmacistDashboardComponent},
        {path:'bookorder', component:PharmacistOrderComponent},
        {path:'profile', component:PharmacistProfileComponent},
        {path:'profile/edit', component:PharmacistChangePasswordComponent},
        {path:'listofdistributors', component:SubscribedDistributorsComponent},
        {path:'view-order',component:PharmacistViewOrderComponent},
        {path:'update-profile',component:PharmacistUpdateProfileComponent}
  ]},

  {path: 'manufacturer', redirectTo: 'manufacturer/dashboard', pathMatch: 'full'},
  {path: 'manufacturer', component: ManufacturerNavigationComponent,
   children:[
     {path: 'dashboard', component:ManufacturerDashboardComponent},
     {path: 'profile', component:ManufacturerProfileComponent},
     {path: 'profile/edit', component:ManufacturerChangePasswordComponent},
     {path: 'update-profile', component:ManufacturerUpdateProfileComponent},
     {path: 'listofdistributors',component: SubscribedDistributorsComponent},
     {path: 'createproduct', component: CreateProductComponent},
     {path: 'transferorder', component: TransferOrderComponent}
   
     

   ]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
