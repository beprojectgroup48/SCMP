import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { MainPageComponent } from './Main Page/Components/mainpage.component';
import { DistributorNavigationComponent } from './Distributor/Components/Navigation/dis-navigation.component';
import { DistributorDashboardComponent } from './Distributor/Components/Dashboard/dis-dashboard.component';
import { DistributorBookOrderComponent } from './Distributor/Components/Book Order/dis-bookorder.component';
import { DistributorYourOrderComponent } from './Distributor/Components/Your Order/dis-yourorder.component';

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
        {path:'bookorder', component:DistributorBookOrderComponent},
        {path:'yourorder', component:DistributorYourOrderComponent},
  ]},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
