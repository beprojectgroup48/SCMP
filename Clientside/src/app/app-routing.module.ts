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
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
