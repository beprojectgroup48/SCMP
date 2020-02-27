import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { MainPageComponent } from './Main Page/Components/mainpage.component';

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'profile', component:RegisterComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
