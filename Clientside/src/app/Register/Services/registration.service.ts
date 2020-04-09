import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: Http) { }

  verifyRegistrationId(registrationId){
    console.log(registrationId);
    return this.http.get('http://localhost:3000/verify',{params: {"id" : registrationId}}).pipe(map(res => res.json()));  
  }
  registerManufacturer(muser){
    console.log(muser);
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');

    return this.http.post('http://localhost:3000/register/manufacturer', muser, {headers : headers}).pipe(map(res => res.json()));

  }
  registerDistributor(duser){
    console.log(duser);
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');

    return this.http.post('http://localhost:3000/register/distributor', duser, {headers : headers}).pipe(map(res => res.json()));

  }
  registerPharmacist(puser){
    console.log(puser);
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');

    return this.http.post('http://localhost:3000/register/pharmacist', puser, {headers : headers}).pipe(map(res => res.json()));

  }
  registerCustomer(cuser){
    console.log(cuser);
    const headers = new Headers();
    headers.append('content-Type' , 'application/json');

    return this.http.post('http://localhost:3000/register/customer', cuser, {headers : headers}).pipe(map(res => res.json()));

  }
}
