
//Manufacturer
import { ManufacturerDashboardComponent } from './Manufacturer/Components/Dashboard/manu-dashboard.component';
import { ManufacturerNavigationComponent } from './Manufacturer/Components/Navigation/manu-navigation.component';
import { ManufacturerProfileComponent } from './Manufacturer/Components/Profile/manu-profile.component';
import { ManufacturerChangePasswordComponent } from './Manufacturer/Components/Profile/Change-Password/manu-change-password.component';
import { ManufacturerUpdateProfileComponent } from './Manufacturer/Components/Profile/Update-Profile/manu-update-profile.component';
import { ManufacturerOrderComponent } from './Manufacturer/Components/Book Order/Order/manu-order.component';
import { ManufacturerViewOrderComponent } from './Manufacturer/Components/Your Order/View Order/manu-view-order.component';
import { ManufacturerIncomingOrdersComponent } from './Manufacturer/Components/Incoming Orders/manu-incoming-orders.component';

//Pharmacist
import { SubscribedDistributorsComponent } from './Pharmacist/Components/List of Distributors/Subscribed Distributor/subscribed-distributors.component';
import { PharmacistViewOrderComponent } from './Pharmacist/Components/Your Order/View Order/pharm-view-order.component';
import { PharmacistProfileComponent } from './Pharmacist/Components/Profile/pharm-profile.component';
import { PharmacistChangePasswordComponent } from './Pharmacist/Components/Profile/Change-Password/pharm-change-password.component';
import { PharmacistOrderComponent } from './Pharmacist/Components/Book Order/Order/pharm-order.component';
import { PharmacistOutgoingOrdersComponent} from './Pharmacist/Components/Outgoing Orders/pharm-outgoing-orders.component';
import { PharmacistDashboardComponent } from './Pharmacist/Components/Dashboard/pharm-dashboard.component';
import { PharmacistNavigationComponent } from './Pharmacist/Components/Navigation/pharm-navigation.component';
//Distributor
import { SubscribedManufacturersComponent } from './Distributor/Components/List of Manufacturers/Subscribed Manufacturers/subscribed-manufacturers.component';
import { OrderComponent } from './Distributor/Components/Book Order/Order/order.component';
import { ViewOrderComponent } from './Distributor/Components/Book Order/View Order/view-order.component';
import { ChangePasswordComponent } from './Distributor/Components/Profile/Change-Password/change-password.component';
import { DistributorProfileComponent } from './Distributor/Components/Profile/dis-profile.component';
import { OutgoingOrdersComponent } from './Distributor/Components/Outgoing Orders/outgoing-orders.component';
import { IncomingOrdersComponent } from './Distributor/Components/Incoming Orders/incoming-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { MainPageComponent } from './Main Page/Components/mainpage.component';
import { DistributorNavigationComponent } from './Distributor/Components/Navigation/dis-navigation.component';
import { DistributorDashboardComponent } from './Distributor/Components/Dashboard/dis-dashboard.component';
import { DistributorYourOrderComponent } from './Distributor/Components/Your Order/dis-yourorder.component';
import { ListOfPharmacistComponent } from './Distributor/Components/List of Pharmacists/list-of-pharmacist.component';
import { UpdateProfileComponent } from './Distributor/Components/Profile/Update-Profile/update-profile.component';

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
        {path:'dashboard/incoming-orders',component:IncomingOrdersComponent},
        {path:'dashboard/outgoing-orders',component:OutgoingOrdersComponent},
        {path:'bookorder', component:OrderComponent},
        {path:'yourorder', component:DistributorYourOrderComponent},
        {path:'profile', component:DistributorProfileComponent},
        {path:'profile/edit', component:ChangePasswordComponent},
        {path:'listofmanufacturer', component:SubscribedManufacturersComponent},
        {path:'listofpharmacist', component:ListOfPharmacistComponent},
        {path:'view-order',component:ViewOrderComponent},
        {path:'update-profile',component:UpdateProfileComponent}
  ]},

  {path: 'pharmacist', redirectTo: 'pharmacist/dashboard', pathMatch: 'full' },
  {path:'pharmacist', component:PharmacistNavigationComponent,
      children:[
        {path:'dashboard', component:PharmacistDashboardComponent},
        {path:'dashboard/outgoing-orders',component:PharmacistOutgoingOrdersComponent},
        {path:'bookorder', component:PharmacistOrderComponent},
        {path:'profile', component:PharmacistProfileComponent},
        {path:'dashboard/incoming-orders', component:ManufacturerIncomingOrdersComponent},
        {path:'profile/edit', component:PharmacistChangePasswordComponent},
        {path:'listofdistributors', component:SubscribedDistributorsComponent},
        {path:'view-order',component:PharmacistViewOrderComponent},
  ]},

  {path: 'manufacturer', redirectTo: 'manufacturer/dashboard', pathMatch: 'full'},
  {path: 'manufacturer', component: ManufacturerNavigationComponent,
   children:[
     {path: 'dashboard', component:ManufacturerDashboardComponent},
     {path: 'profile', component:ManufacturerProfileComponent},
     {path: 'profile/edit', component:ManufacturerChangePasswordComponent},
     {path: 'update-profile', component:ManufacturerUpdateProfileComponent},
     {path: 'listofdistributors',component: SubscribedDistributorsComponent},
     {path: 'bookorder', component: ManufacturerOrderComponent},
     {path: 'view-order', component: ManufacturerViewOrderComponent}
     

   ]}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
