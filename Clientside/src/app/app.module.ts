import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule,MatSelectModule,MatIconModule} from '@angular/material';
import { MainPageComponent } from './Main Page/Components/mainpage.component'
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LoginComponent } from './Login/Components/login.component';
import { RegisterComponent } from './Register/Components/register.component';
import { ForgetpassComponent } from './Forgot Password/Components/forgetpass.component';
import { FirstComponent } from './Distributor/Dashboard/first.component';
import { SecondComponent } from './Distributor/Book Order/second.component';
import { ThirdComponent } from './Distributor/your-orders/third.component';
import { NavigationComponent } from './Distributor/navigation/navigation.component';
import {RouterModule, Routes} from "@angular/router";
import {CustomMaterialModule} from "./core/material.module";

const appRoutes: Routes = [
  { path: '', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'first', component: FirstComponent, data: { title: 'First Component' } },
  { path: 'second', component: SecondComponent, data: { title: 'Second Component' } },
  { path: 'third', component: ThirdComponent,data:{title: 'Third Component'}}
];
@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpassComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    NavigationComponent
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
    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
