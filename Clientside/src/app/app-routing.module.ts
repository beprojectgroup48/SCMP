import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { MainPageComponent } from './Main Page/Components/mainpage.component';
import { NavigationComponent } from './Distributor/navigation/navigation.component';

const routes: Routes = [
  {path:'',component:MainPageComponent,
  children:[
    {path:'', component:LoginComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent}
  ]},
  {path:'dashboard', component:NavigationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
