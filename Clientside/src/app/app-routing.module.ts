import { OutgoingOrdersComponent } from './Distributor/Components/Outgoing Orders/outgoing-orders.component';
import { IncomingOrdersComponent } from './Distributor/Components/Incoming Orders/incoming-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { MainPageComponent } from './Main Page/Components/mainpage.component';
import { DistributorNavigationComponent } from './Distributor/Components/Navigation/dis-navigation.component';
import { DistributorDashboardComponent } from './Distributor/Components/Dashboard/dis-dashboard.component';
import { DistributorBookOrderComponent } from './Distributor/Components/Book Order/dis-bookorder.component';
import { DistributorYourOrderComponent } from './Distributor/Components/Your Order/dis-yourorder.component';
import { DistributorProfileComponent } from './Distributor/Components/Profile/dis-profile.component';
import { UpdateProfileComponent } from './Distributor/Components/Profile/update-profile/update-profile.component';
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'',component:MainPageComponent,
    children:[
      {path:'', component:LoginComponent},
      {path:'login', component:LoginComponent},
      {path:'register', component:RegisterComponent}
  ]},

  {path:'distributor', component:DistributorNavigationComponent,
      children:[
        {path:'dashboard', component:DistributorDashboardComponent},
        {path:'dashboard/incoming-orders',component:IncomingOrdersComponent},
        {path:'dashboard/outgoing-orders',component:OutgoingOrdersComponent},
        {path:'bookorder', component:DistributorBookOrderComponent},
        {path:'yourorder', component:DistributorYourOrderComponent},
        {path:'profile', component:DistributorProfileComponent},
        {path:'update-profile', component:UpdateProfileComponent},
  ]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
